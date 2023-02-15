import { BOND_CATEGORY } from "@prisma/client";
import { PrismaService } from "src/prisma.service";
import { CreateBondInput } from "./dto/bond.request";
export declare class BondService {
    private prisma;
    constructor(prisma: PrismaService);
    createBond(userId: number, input: CreateBondInput): Promise<any>;
    findAllBonds(): Promise<import(".prisma/client").Bond[]>;
    findOneBond(bondId: number): Promise<import(".prisma/client").Bond>;
    findBondType(type: BOND_CATEGORY): Promise<import(".prisma/client").Bond[]>;
}
