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
exports.TokenService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../../prisma.service");
const date_1 = require("../../utils/date");
const generateToken_1 = require("../../utils/generateToken");
let TokenService = class TokenService {
    constructor(prisma) {
        this.prisma = prisma;
    }
    async createAuthToken(user, subject) {
        return await this.prisma.token.create({
            data: {
                email: user.email,
                code: (0, generateToken_1.generateToken)(),
                expires: `${(0, date_1.daysToUnix)(1)}`,
                subject,
                validity: true,
                user: { connect: { id: user.id } },
            },
        });
    }
    async checkTokenValidity(input) {
        const { email, token } = input;
        const TOKEN = await this.prisma.token.findFirst({
            where: {
                AND: [
                    {
                        code: {
                            equals: token,
                        },
                    },
                    {
                        email: {
                            equals: email,
                        },
                    },
                ],
            },
        });
        if (!TOKEN)
            return false;
        if ((0, date_1.unixToDaysLeft)(Number(TOKEN.expires)) < 1)
            return false;
        if (!TOKEN.validity)
            return false;
        return true;
    }
    async invalidateToken(code) {
        try {
            await this.prisma.token.update({
                where: { code },
                data: { validity: false },
            });
            return true;
        }
        catch (err) {
            throw new common_1.BadRequestException({
                name: "coupon",
                message: err,
            });
        }
    }
};
TokenService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], TokenService);
exports.TokenService = TokenService;
//# sourceMappingURL=token.service.js.map