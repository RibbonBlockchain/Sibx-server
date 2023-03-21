import { BOND_CATEGORY } from "@prisma/client";
import { PrismaService } from "src/prisma.service";
import { CreateBondInput, PurchaseBondDto } from "./dto/bond.request";
export declare class BondService {
    private prisma;
    constructor(prisma: PrismaService);
    createBond(userId: number, input: CreateBondInput): Promise<any>;
    findAllBonds(): Promise<import(".prisma/client").Bond[]>;
    findOneBond(bondId: number): Promise<import(".prisma/client").Bond>;
    findBondType(type: BOND_CATEGORY): Promise<import(".prisma/client").Bond[]>;
    purchaseBond(userId: number, input: PurchaseBondDto): Promise<boolean>;
    bondAmountInvested(bondId: number): Promise<import(".prisma/client").Prisma.GetPurchsedBondAggregateType<{
        _sum: {
            amount: true;
        };
        where: {
            bondId: number;
        };
    }>>;
}
