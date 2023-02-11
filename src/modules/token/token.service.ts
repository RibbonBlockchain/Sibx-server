import { BadRequestException, Injectable } from "@nestjs/common";
import { User } from "@prisma/client";
import { PrismaService } from "src/prisma.service";
import { daysToUnix, unixToDaysLeft } from "src/utils/date";
import { generateToken } from "src/utils/generateToken";
import { TokenValidityInput } from "./dto/token.request";

@Injectable()
export class TokenService {
  constructor(private prisma: PrismaService) {}

  public async createAuthToken(user: User, subject: string) {
    return await this.prisma.token.create({
      data: {
        email: user.email,
        code: generateToken(),
        expires: `${daysToUnix(1)}`,
        subject,
        validity: true,
        user: { connect: { id: user.id } },
      },
    });
  }

  async checkTokenValidity(input: TokenValidityInput): Promise<Boolean> {
    const { email, token } = input;
    const TOKEN = await this.prisma.token.findFirst({
      where: {
        AND: [
          {
            code: {
              equals: token,
            },
          },
          {
            email: {
              equals: email,
            },
          },
        ],
      },
    });
    if (!TOKEN) return false;
    if (unixToDaysLeft(Number(TOKEN.expires)) < 1) return false;
    if (!TOKEN.validity) return false;
    return true;
  }

  async invalidateToken(code: string) {
    try {
      await this.prisma.token.update({
        where: { code },
        data: { validity: false },
      });
      return true;
    } catch (err) {
      throw new BadRequestException({
        name: "coupon",
        message: err,
      });
    }
  }
}
