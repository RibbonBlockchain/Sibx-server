import { Body, Controller, Post, Request } from "@nestjs/common";
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
}
