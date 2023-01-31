import { InitiatePaymentParams } from "./dto/request.dto";
import { TransactionService } from "./transaction.service";
export declare class TransactionController {
    private readonly transactionService;
    constructor(transactionService: TransactionService);
    initiateFlutterwavePayment(input: InitiatePaymentParams): Promise<any>;
    initiateLazerpayPayment(input: InitiatePaymentParams): Promise<void>;
}
