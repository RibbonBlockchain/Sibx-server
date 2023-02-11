import { Module } from "@nestjs/common";
import { PrismaService } from "src/prisma.service";
import { MailModule } from "../mail/mail.module";
import { TokenModule } from "../token/token.module";
import { UserController } from "./user.controller";
import { UserService } from "./user.service";

@Module({
  imports: [MailModule, TokenModule],
  providers: [UserService, PrismaService],
  controllers: [UserController],
  exports: [UserService],
})
export class UserModule {}
