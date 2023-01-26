import { InitiateFlutterwavePaymentParams } from './dto/request.dto';
import { TransactionService } from './transaction.service';
export declare class TransactionController {
    private readonly transactionService;
    constructor(transactionService: TransactionService);
    initiateFlutterwavePayment(input: InitiateFlutterwavePaymentParams): Promise<any>;
}
