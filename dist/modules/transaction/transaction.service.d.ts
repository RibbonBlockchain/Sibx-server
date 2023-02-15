import { InitiatePaymentParams } from "./dto/request.dto";
export declare class TransactionService {
    initiateFlutterwaveTransaction(input: InitiatePaymentParams): Promise<any>;
    initiateLazerpayTransaction(input: InitiatePaymentParams): Promise<void>;
}
