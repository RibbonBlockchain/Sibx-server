import { InitiateFlutterwavePaymentParams } from './dto/request.dto';
export declare class TransactionService {
    initiateFlutterwaveTransaction(input: InitiateFlutterwavePaymentParams): Promise<any>;
}
