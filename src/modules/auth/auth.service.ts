import { Injectable } from "@nestjs/common";
import { JwtService } from "@nestjs/jwt";
import { UserService } from "../user/user.service";
import * as argon2 from "argon2";

@Injectable()
export class AuthService {
  constructor(
    private usersService: UserService,
    private jwtService: JwtService
  ) {}

  async validateUser(usernameOrEmail: string, pass: string): Promise<any> {
    const user = await this.usersService.findOneByUsernameOrEmail(
      usernameOrEmail
    );
    if (user && (await argon2.verify(user.password, pass))) {
      const { password, ...result } = user;
      return result;
    }
    return null;
  }

  async login(user: any) {
    const payload = {
      email: user.email,
      username: user.username,
      sub: user.id,
    };
    return {
      access_token: this.jwtService.sign(payload),
    };
  }
}
