import { Body, Controller, Get, Param, Post, Request } from "@nestjs/common";
import { BOND_CATEGORY } from "@prisma/client";
import { Auth } from "../auth/decorators/auth.decorator";
import { BondService } from "./bond.service";
import { CreateBondInput } from "./dto/bond.request";

@Controller("bond")
export class BondController {
  constructor(private readonly bondService: BondService) {}

  @Auth()
  @Post("create")
  createBond(@Request() req, @Body() input: CreateBondInput) {
    return this.bondService.createBond(req.user.userId, input);
  }

  @Get()
  findAllBonds() {
    return this.bondService.findAllBonds();
  }

  @Get(":id")
  findOneBond(@Param() params) {
    return this.bondService.findOneBond(params.id);
  }

  @Get("type")
  findBondType(@Body() type: BOND_CATEGORY) {
    return this.bondService.findBondType(type);
  }
}
