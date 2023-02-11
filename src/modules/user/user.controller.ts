import { Body, Controller, Get, Post } from "@nestjs/common";
import { UserRegisterInput } from "./dto/user.request";
import { UserService } from "./user.service";

@Controller("user")
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post("register")
  registerUser(@Body() input: UserRegisterInput) {
    return this.userService.register(input);
  }
}
