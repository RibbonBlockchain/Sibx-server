import { Module } from "@nestjs/common";
import { BondService } from "./bond.service";
import { BondController } from "./bond.controller";
import { PrismaService } from "src/prisma.service";

@Module({
  controllers: [BondController],
  providers: [BondService, PrismaService],
})
export class BondModule {}
