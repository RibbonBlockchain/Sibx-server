import { Request, Response } from "express";
import { InitiatePaymentParams } from "./dto/request.dto";
import { TransactionService } from "./transaction.service";
export declare class TransactionController {
    private readonly transactionService;
    constructor(transactionService: TransactionService);
    initiateFlutterwavePayment(input: InitiatePaymentParams): Promise<any>;
    confirmFlutterPayment(res: Response, req: Request): Promise<Response<any, Record<string, any>>>;
    initiateLazerpayPayment(input: InitiatePaymentParams): Promise<void>;
}
