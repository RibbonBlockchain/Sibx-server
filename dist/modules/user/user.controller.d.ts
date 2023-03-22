import { UserProfileInput, UserRegisterInput } from "./dto/user.request";
import { UserService } from "./user.service";
export declare class UserController {
    private readonly userService;
    constructor(userService: UserService);
    registerUser(input: UserRegisterInput): Promise<Boolean>;
    confirmUserToken(input: {
        token: string;
    }): Promise<boolean>;
    purchaseBond(req: any): Promise<import(".prisma/client").User>;
    updateProfile(req: any, input: UserProfileInput): Promise<Boolean>;
}
