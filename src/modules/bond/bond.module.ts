import { Module } from "@nestjs/common";
import { BondService } from "./bond.service";
import { BondController } from "./bond.controller";
import { PrismaService } from "src/prisma.service";
import { CloudinaryModule } from "../cloudinary/cloudinary.module";

@Module({
  controllers: [BondController],
  providers: [BondService, PrismaService],
  imports: [CloudinaryModule],
})
export class BondModule {}
