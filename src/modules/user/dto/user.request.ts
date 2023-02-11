import { ACCOUNT_TYPE } from "@prisma/client";
import { IsEmail, IsEnum, IsString } from "class-validator";

export class UserRegisterInput {
  @IsString()
  name: string;
  @IsString()
  username: string;
  @IsEmail()
  email: string;
  @IsString()
  password: string;
  @IsEnum(ACCOUNT_TYPE)
  accountType: ACCOUNT_TYPE;
}
