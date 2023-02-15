import { PrismaService } from "src/prisma.service";
import { CreateBondInput } from "./dto/bond.request";
export declare class BondService {
    private prisma;
    constructor(prisma: PrismaService);
    createBond(userId: number, input: CreateBondInput): Promise<any>;
}
