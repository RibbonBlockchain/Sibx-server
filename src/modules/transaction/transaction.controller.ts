import { Controller, Post, Body, Get } from "@nestjs/common";
import { InitiatePaymentParams } from "./dto/request.dto";
import { TransactionService } from "./transaction.service";

@Controller("transaction")
export class TransactionController {
  constructor(private readonly transactionService: TransactionService) {}

  @Post("initiate-flutterwave-payment")
  initiateFlutterwavePayment(@Body() input: InitiatePaymentParams) {
    return this.transactionService.initiateFlutterwaveTransaction(input);
  }

  @Post("initiate-lazerpay-payment")
  initiateLazerpayPayment(@Body() input: InitiatePaymentParams) {
    return this.transactionService.initiateLazerpayTransaction(input);
  }
}
