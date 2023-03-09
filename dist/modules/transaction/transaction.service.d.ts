import { Response } from "express";
import { PrismaService } from "src/prisma.service";
import { InitiatePaymentParams } from "./dto/request.dto";
export declare class TransactionService {
    private prisma;
    constructor(prisma: PrismaService);
    initiateFlutterwaveTransaction(input: InitiatePaymentParams): Promise<any>;
    initiateLazerpayTransaction(input: InitiatePaymentParams): Promise<void>;
    verifyFlutterwaveCheckout(data: any, res: Response): Promise<Response<any, Record<string, any>>>;
}
