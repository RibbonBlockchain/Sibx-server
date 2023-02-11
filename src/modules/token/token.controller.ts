import { Controller } from "@nestjs/common";
import { User } from "@prisma/client";
import { PrismaService } from "src/prisma.service";
import { daysToUnix } from "src/utils/date";
import { generateToken } from "src/utils/generateToken";
import { TokenService } from "./token.service";

@Controller("token")
export class TokenController {
  constructor(private readonly tokenService: TokenService) {}
}
