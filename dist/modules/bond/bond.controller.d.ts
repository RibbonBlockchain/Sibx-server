/// <reference types="multer" />
import { BOND_CATEGORY } from "@prisma/client";
import { CloudinaryService } from "../cloudinary/cloudinary.service";
import { BondService } from "./bond.service";
import { CreateBondInput, PurchaseBondDto, UploadImageDto } from "./dto/bond.request";
export declare class BondController {
    private readonly bondService;
    private readonly cloudinaryService;
    constructor(bondService: BondService, cloudinaryService: CloudinaryService);
    createBond(req: any, input: CreateBondInput): Promise<any>;
    findAllBonds(): Promise<import(".prisma/client").Bond[]>;
    findBondType(type: BOND_CATEGORY): Promise<import(".prisma/client").Bond[]>;
    getBondStats(params: any): Promise<{
        total: number;
        stats: (import(".prisma/client").Prisma.PickArray<import(".prisma/client").Prisma.PurchsedBondGroupByOutputType, "bondId"[]> & {
            _sum: {
                amount: number;
            };
            _count: number;
        })[];
    }>;
    findOneBond(params: any): Promise<import(".prisma/client").Bond>;
    uploadBondImage(file: Express.Multer.File, input: UploadImageDto): Promise<{
        data: {
            imageUrl: any;
            imageKey: any;
            isUploaded: boolean;
        };
    }>;
    purchaseBond(req: any, input: PurchaseBondDto): Promise<boolean>;
    bondAmountInvested(params: any): Promise<import(".prisma/client").Prisma.GetPurchsedBondAggregateType<{
        _sum: {
            amount: true;
        };
        where: {
            bondId: number;
        };
    }>>;
}
