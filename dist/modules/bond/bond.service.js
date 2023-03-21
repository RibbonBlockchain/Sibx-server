"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BondService = void 0;
const common_1 = require("@nestjs/common");
const client_1 = require("@prisma/client");
const prisma_service_1 = require("../../prisma.service");
let BondService = class BondService {
    constructor(prisma) {
        this.prisma = prisma;
    }
    async createBond(userId, input) {
        try {
            await this.prisma.bond.create({
                data: Object.assign(Object.assign({}, input), { user: { connect: { id: userId } } }),
            });
            return true;
        }
        catch (err) {
            throw new common_1.BadRequestException({
                name: "bond",
                message: "unable to create bond",
            });
        }
    }
    async findAllBonds() {
        return await this.prisma.bond.findMany();
    }
    async findOneBond(bondId) {
        return await this.prisma.bond.findUnique({ where: { id: bondId } });
    }
    async findBondType(type) {
        if (type === client_1.BOND_CATEGORY.BOTH) {
            return await this.prisma.bond.findMany({
                where: { category: client_1.BOND_CATEGORY.BOTH },
            });
        }
        else if (type === client_1.BOND_CATEGORY.FIAT) {
            return await this.prisma.bond.findMany({
                where: {
                    OR: [
                        { category: client_1.BOND_CATEGORY.BOTH },
                        { category: client_1.BOND_CATEGORY.FIAT },
                    ],
                },
            });
        }
        else {
            return await this.prisma.bond.findMany({
                where: {
                    OR: [
                        { category: client_1.BOND_CATEGORY.BOTH },
                        { category: client_1.BOND_CATEGORY.TOKENIZED },
                    ],
                },
            });
        }
    }
    async purchaseBond(userId, input) {
        const { amount, bondId, paymentType, tx_ref } = input;
        const bond = await this.prisma.bond.findUnique({ where: { id: bondId } });
        if (!bond) {
            throw new common_1.BadRequestException({
                name: "bond",
                message: "unable to find bond",
            });
        }
        await this.prisma.purchsedBond.create({
            data: {
                amount,
                paymentType,
                bond: { connect: { id: bondId } },
                user: { connect: { id: userId } },
                tx_ref,
            },
        });
        return true;
    }
    async bondAmountInvested(bondId) {
        return await this.prisma.purchsedBond.aggregate({
            _sum: { amount: true },
            where: { bondId },
        });
    }
};
BondService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], BondService);
exports.BondService = BondService;
//# sourceMappingURL=bond.service.js.map