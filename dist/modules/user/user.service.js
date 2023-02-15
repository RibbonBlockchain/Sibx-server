"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../../prisma.service");
const argon2 = require("argon2");
const mail_service_1 = require("../mail/mail.service");
const mail_constants_1 = require("../mail/mail.constants");
const token_service_1 = require("../token/token.service");
const token_constants_1 = require("../token/token.constants");
let UserService = class UserService {
    constructor(prisma, mailService, tokenService) {
        this.prisma = prisma;
        this.mailService = mailService;
        this.tokenService = tokenService;
    }
    async register(input) {
        const { accountType, email, name, password, username } = input;
        const hashedPassword = await argon2.hash(password);
        const emailUsed = await this.prisma.user.findUnique({ where: { email } });
        if (emailUsed) {
            throw new common_1.BadRequestException({
                name: "user",
                message: "Email has been used",
            });
        }
        const usernameUsed = await this.prisma.user.findUnique({
            where: { username },
        });
        if (usernameUsed) {
            throw new common_1.BadRequestException({
                name: "user",
                message: "Username has been used",
            });
        }
        const newUser = await this.prisma.user.create({
            data: {
                accountType,
                email,
                name,
                password: hashedPassword,
                username,
            },
        });
        const verificationToken = await this.tokenService.createAuthToken(newUser, token_constants_1.TOKEN_SUBJECT.VERIFY_USER_ACCOUNT);
        await this.mailService.sendMail({
            to: newUser.email,
            subject: mail_constants_1.MAIL_SUBJECT.VERIFY_ACCOUNT,
            html: mail_constants_1.MAIL_MESSAGE.VERIFY_ACCOUNT(`${process.env.CLIENT_DEPLOYED_URL}/register?token=${verificationToken.code}&type=new_user`),
        });
        return true;
    }
    async confirmUserToken(token) {
        const userToken = await this.prisma.token.findFirst({
            where: { code: token },
        });
        if (!userToken)
            return false;
        const tokenIsValid = await this.tokenService.checkTokenValidity({
            token,
            email: userToken.email,
        });
        if (!tokenIsValid) {
            throw new common_1.BadRequestException({
                name: "token",
                message: "token is not valid",
            });
        }
        await this.prisma.user.update({
            where: { email: userToken.email },
            data: { verified: true },
        });
        return true;
    }
    async findOneByUsernameOrEmail(usernameOrEmail) {
        const user = usernameOrEmail.includes("@")
            ? await this.prisma.user.findUnique({ where: { email: usernameOrEmail } })
            : await this.prisma.user.findUnique({
                where: { username: usernameOrEmail },
            });
        if (user.verified === false) {
            throw new common_1.BadRequestException({
                name: "user",
                message: "Kindly verify your account!",
            });
        }
        return user;
    }
};
UserService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService,
        mail_service_1.MailService,
        token_service_1.TokenService])
], UserService);
exports.UserService = UserService;
//# sourceMappingURL=user.service.js.map