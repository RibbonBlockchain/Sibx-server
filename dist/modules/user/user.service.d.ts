import { User } from "@prisma/client";
import { PrismaService } from "src/prisma.service";
import { UserProfileInput, UserRegisterInput } from "./dto/user.request";
import { MailService } from "../mail/mail.service";
import { TokenService } from "../token/token.service";
export declare class UserService {
    private prisma;
    private readonly mailService;
    private readonly tokenService;
    constructor(prisma: PrismaService, mailService: MailService, tokenService: TokenService);
    register(input: UserRegisterInput): Promise<Boolean>;
    confirmUserToken(token: string): Promise<boolean>;
    findOneByUsernameOrEmail(usernameOrEmail: string): Promise<User | undefined>;
    findOneById(userId: number): Promise<User | undefined>;
    updateProfile(userId: number, input: UserProfileInput): Promise<Boolean>;
}
