import { BadRequestException, Injectable } from "@nestjs/common";
import { User } from "@prisma/client";
import { PrismaService } from "src/prisma.service";
import { UserRegisterInput } from "./dto/user.request";
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
        `${process.env.CLIENT_DEPLOYED_URL}/register?token=${verificationToken.code}&type=new_user`
      ),
    });

    return true;
  }

  async findOneByUsernameOrEmail(
    usernameOrEmail: string
  ): Promise<User | undefined> {
    return usernameOrEmail.includes("@")
      ? await this.prisma.user.findUnique({ where: { email: usernameOrEmail } })
      : await this.prisma.user.findUnique({
          where: { username: usernameOrEmail },
        });
  }
}
