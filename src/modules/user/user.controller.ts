import { Body, Controller, Get, Post, Request } from "@nestjs/common";
import { Auth } from "../auth/decorators/auth.decorator";
import { UserRegisterInput } from "./dto/user.request";
import { UserService } from "./user.service";

@Controller("user")
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post("register")
  registerUser(@Body() input: UserRegisterInput) {
    return this.userService.register(input);
  }

  @Post("confirm-token")
  confirmUserToken(@Body() input: { token: string }) {
    return this.userService.confirmUserToken(input.token);
  }

  @Auth()
  @Get("profile")
  purchaseBond(@Request() req) {
    return this.userService.findOneById(req.user.userId);
  }
}
