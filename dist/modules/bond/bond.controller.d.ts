import { BOND_CATEGORY } from "@prisma/client";
import { BondService } from "./bond.service";
import { CreateBondInput } from "./dto/bond.request";
export declare class BondController {
    private readonly bondService;
    constructor(bondService: BondService);
    createBond(req: any, input: CreateBondInput): Promise<any>;
    findAllBonds(): Promise<import(".prisma/client").Bond[]>;
    findOneBond(params: any): Promise<import(".prisma/client").Bond>;
    findBondType(type: BOND_CATEGORY): Promise<import(".prisma/client").Bond[]>;
}
