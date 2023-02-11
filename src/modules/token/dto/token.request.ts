import { IsEmail, IsString } from "class-validator";

export class ValidateTokenInput {
  @IsString()
  token: string;

  @IsString()
  username: string;

  @IsEmail()
  email: string;
}

export class TokenValidityInput {
  @IsString()
  token: string;

  @IsEmail()
  email: string;
}
