import { IsEmail, IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class InitiateFlutterwavePaymentParams {
  @IsNumber()
  amount: number;
  @IsEmail()
  email: string;
  @IsString()
  name: string;
  @IsNotEmpty()
  phoneNumber: string;
}
