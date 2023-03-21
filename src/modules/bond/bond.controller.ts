import {
  BadRequestException,
  Body,
  Controller,
  Get,
  Param,
  Post,
  Query,
  Request,
  UploadedFile,
  UseInterceptors,
} from "@nestjs/common";
import { FileInterceptor } from "@nestjs/platform-express";
import { BOND_CATEGORY } from "@prisma/client";
import { IMAGE_TYPE } from "../../constants";
import { Auth } from "../auth/decorators/auth.decorator";
import { CloudinaryService } from "../cloudinary/cloudinary.service";
import { BondService } from "./bond.service";
import {
  CreateBondInput,
  PurchaseBondDto,
  UploadImageDto,
} from "./dto/bond.request";

@Controller("bond")
export class BondController {
  constructor(
    private readonly bondService: BondService,
    private readonly cloudinaryService: CloudinaryService
  ) {}

  @Auth()
  @Post("create")
  createBond(@Request() req, @Body() input: CreateBondInput) {
    return this.bondService.createBond(req.user.userId, input);
  }

  @Get()
  findAllBonds() {
    return this.bondService.findAllBonds();
  }

  @Get("type")
  findBondType(@Query("type") type: BOND_CATEGORY) {
    return this.bondService.findBondType(type);
  }

  @Get(":id")
  findOneBond(@Param() params) {
    return this.bondService.findOneBond(Number(params.id));
  }

  @Post("upload-bond-image")
  @UseInterceptors(FileInterceptor("file"))
  async uploadBondImage(
    @UploadedFile() file: Express.Multer.File,
    @Body() input: UploadImageDto
  ) {
    if (input.imageFor !== IMAGE_TYPE.BOND) {
      throw new BadRequestException({
        name: "upload",
        message: "Upload not successful",
      });
    }
    const uploadData = await this.cloudinaryService.uploadMedia(
      file,
      input.imageFor
    );
    return {
      data: {
        imageUrl: uploadData.secure_url,
        imageKey: uploadData.public_id,
        isUploaded: true,
      },
    };
  }

  @Auth()
  @Post("purchase")
  purchaseBond(@Request() req, @Body() input: PurchaseBondDto) {
    return this.bondService.purchaseBond(req.user.userId, input);
  }

  @Get("invested/:id")
  bondAmountInvested(@Param() params) {
    return this.bondService.bondAmountInvested(Number(params.id));
  }
}
