import { Controller, Post, Body, Get, Res, Req } from "@nestjs/common";
import { Request, Response } from "express";
import { InitiatePaymentParams } from "./dto/request.dto";
import { TransactionService } from "./transaction.service";

@Controller("transaction")
export class TransactionController {
  constructor(private readonly transactionService: TransactionService) {}

  @Post("initiate-flutterwave-payment")
  initiateFlutterwavePayment(@Body() input: InitiatePaymentParams) {
    return this.transactionService.initiateFlutterwaveTransaction(input);
  }

  @Post("flutterwave-webhook")
  confirmFlutterPayment(@Res() res: Response, @Req() req: Request) {
    console.log("Flutter", req.body);
    return this.transactionService.verifyFlutterwaveCheckout(req.body, res);
  }

  @Post("initiate-lazerpay-payment")
  initiateLazerpayPayment(@Body() input: InitiatePaymentParams) {
    return this.transactionService.initiateLazerpayTransaction(input);
  }
}
