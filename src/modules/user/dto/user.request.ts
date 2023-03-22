import { ACCOUNT_TYPE } from "@prisma/client";
import { IsEmail, IsEnum, IsOptional, IsString } from "class-validator";

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

export class UserProfileInput {
  @IsString()
  phoneNumber: string;
  @IsString()
  city: string;
  @IsString()
  state: string;
  @IsString()
  zipCode: string;
  @IsString()
  addressOne: string;
  @IsOptional()
  addressTwo: string;
}
