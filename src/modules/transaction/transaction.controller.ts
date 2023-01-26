import { Controller, Post, Body } from '@nestjs/common';
import { InitiateFlutterwavePaymentParams } from './dto/request.dto';
import { TransactionService } from './transaction.service';

@Controller('transaction')
export class TransactionController {
  constructor(private readonly transactionService: TransactionService) {}

  @Post('initiate-flutterwave-payment')
  initiateFlutterwavePayment(@Body() input: InitiateFlutterwavePaymentParams) {
    return this.transactionService.initiateFlutterwaveTransaction(input);
  }
}
