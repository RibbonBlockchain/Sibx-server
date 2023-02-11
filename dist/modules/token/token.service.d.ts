import { User } from "@prisma/client";
import { PrismaService } from "src/prisma.service";
import { TokenValidityInput } from "./dto/token.request";
export declare class TokenService {
    private prisma;
    constructor(prisma: PrismaService);
    createAuthToken(user: User, subject: string): Promise<import(".prisma/client").Token>;
    checkTokenValidity(input: TokenValidityInput): Promise<Boolean>;
    invalidateToken(code: string): Promise<boolean>;
}
