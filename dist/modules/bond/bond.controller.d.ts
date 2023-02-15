import { BondService } from "./bond.service";
import { CreateBondInput } from "./dto/bond.request";
export declare class BondController {
    private readonly bondService;
    constructor(bondService: BondService);
    createBond(req: any, input: CreateBondInput): Promise<any>;
}
