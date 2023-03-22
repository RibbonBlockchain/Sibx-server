import { BadRequestException, Injectable } from "@nestjs/common";
import { User } from "@prisma/client";
import { PrismaService } from "src/prisma.service";
import { UserProfileInput, UserRegisterInput } from "./dto/user.request";
import * as argon2 from "argon2";
import { MailService } from "../mail/mail.service";
import { MAIL_MESSAGE, MAIL_SUBJECT } from "../mail/mail.constants";
import { TokenService } from "../token/token.service";
import { TOKEN_SUBJECT } from "../token/token.constants";

@Injectable()
export class UserService {
  constructor(
    private prisma: PrismaService,
    private readonly mailService: MailService,
    private readonly tokenService: TokenService
  ) {}

  async register(input: UserRegisterInput): Promise<Boolean> {
    const { accountType, email, name, password, username } = input;
    const hashedPassword = await argon2.hash(password);
    const emailUsed = await this.prisma.user.findUnique({ where: { email } });
    if (emailUsed) {
      throw new BadRequestException({
        name: "user",
        message: "Email has been used",
      });
    }
    const usernameUsed = await this.prisma.user.findUnique({
      where: { username },
    });
    if (usernameUsed) {
      throw new BadRequestException({
        name: "user",
        message: "Username has been used",
      });
    }

    const newUser = await this.prisma.user.create({
      data: {
        accountType,
        email,
        name,
        password: hashedPassword,
        username,
      },
    });

    const verificationToken = await this.tokenService.createAuthToken(
      newUser,
      TOKEN_SUBJECT.VERIFY_USER_ACCOUNT
    );

    await this.mailService.sendMail({
      to: newUser.email,
      subject: MAIL_SUBJECT.VERIFY_ACCOUNT,
      html: MAIL_MESSAGE.VERIFY_ACCOUNT(
        `${process.env.CLIENT_DEPLOYED_URL}/signup/verify?token=${verificationToken.code}&type=new_user`
      ),
    });

    return true;
  }

  public async confirmUserToken(token: string) {
    const userToken = await this.prisma.token.findFirst({
      where: { code: token },
    });
    if (!userToken) return false;
    const tokenIsValid = await this.tokenService.checkTokenValidity({
      token,
      email: userToken.email,
    });
    if (!tokenIsValid) {
      throw new BadRequestException({
        name: "token",
        message: "token is not valid",
      });
    }
    await this.prisma.user.update({
      where: { email: userToken.email },
      data: { verified: true },
    });
    await this.prisma.token.update({
      where: { code: token },
      data: { validity: false },
    });
    return true;
  }

  async findOneByUsernameOrEmail(
    usernameOrEmail: string
  ): Promise<User | undefined> {
    const user = usernameOrEmail.includes("@")
      ? await this.prisma.user.findUnique({ where: { email: usernameOrEmail } })
      : await this.prisma.user.findUnique({
          where: { username: usernameOrEmail },
        });

    if (user.verified === false) {
      throw new BadRequestException({
        name: "user",
        message: "Kindly verify your account!",
      });
    }

    return user;
  }

  async findOneById(userId: number): Promise<User | undefined> {
    const user = await this.prisma.user.findUnique({
      where: { id: userId },
      include: { profile: true },
    });

    if (user.verified === false) {
      throw new BadRequestException({
        name: "user",
        message: "Kindly verify your account!",
      });
    }

    delete user.password;
    return user;
  }

  async updateProfile(
    userId: number,
    input: UserProfileInput
  ): Promise<Boolean> {
    await this.prisma.profile.create({
      data: {
        ...input,
        user: { connect: { id: userId } },
      },
    });
    return true;
  }
}
