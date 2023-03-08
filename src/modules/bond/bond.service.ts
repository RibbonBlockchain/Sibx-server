import { BadRequestException, Injectable } from "@nestjs/common";
import { BOND_CATEGORY } from "@prisma/client";
import { PrismaService } from "src/prisma.service";
import { CreateBondInput, PurchaseBondDto } from "./dto/bond.request";

@Injectable()
export class BondService {
  constructor(private prisma: PrismaService) {}

  async createBond(userId: number, input: CreateBondInput): Promise<any> {
    try {
      await this.prisma.bond.create({
        data: {
          ...input,
          user: { connect: { id: userId } },
        },
      });
      return true;
    } catch (err) {
      throw new BadRequestException({
        name: "bond",
        message: "unable to create bond",
      });
    }
  }

  async findAllBonds() {
    return await this.prisma.bond.findMany();
  }

  async findOneBond(bondId: number) {
    return await this.prisma.bond.findUnique({ where: { id: bondId } });
  }

  async findBondType(type: BOND_CATEGORY) {
    if (type === BOND_CATEGORY.BOTH) {
      return await this.prisma.bond.findMany({
        where: { category: BOND_CATEGORY.BOTH },
      });
    } else if (type === BOND_CATEGORY.FIAT) {
      return await this.prisma.bond.findMany({
        where: {
          OR: [
            { category: BOND_CATEGORY.BOTH },
            { category: BOND_CATEGORY.FIAT },
          ],
        },
      });
    } else {
      return await this.prisma.bond.findMany({
        where: {
          OR: [
            { category: BOND_CATEGORY.BOTH },
            { category: BOND_CATEGORY.TOKENIZED },
          ],
        },
      });
    }
  }

  async purchaseBond(userId: number, input: PurchaseBondDto) {
    const { amount, bondId, paymentType, tx_ref } = input;
    const bond = await this.prisma.bond.findUnique({ where: { id: bondId } });
    if (!bond) {
      throw new BadRequestException({
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
}
