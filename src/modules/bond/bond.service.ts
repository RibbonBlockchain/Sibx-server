import { BadRequestException, Injectable } from "@nestjs/common";
import { PrismaService } from "src/prisma.service";
import { CreateBondInput } from "./dto/bond.request";

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
      console.log(err);
      throw new BadRequestException({
        name: "bond",
        message: "unable to create bond",
      });
    }
  }
}
