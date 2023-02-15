import { UserRegisterInput } from "./dto/user.request";
import { UserService } from "./user.service";
export declare class UserController {
    private readonly userService;
    constructor(userService: UserService);
    registerUser(input: UserRegisterInput): Promise<Boolean>;
    confirmUserToken(token: string): Promise<boolean>;
}
