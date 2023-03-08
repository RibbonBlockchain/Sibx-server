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
exports.TransactionService = void 0;
const common_1 = require("@nestjs/common");
const client_1 = require("@prisma/client");
const axios_1 = require("axios");
const lazerpay_node_sdk_1 = require("lazerpay-node-sdk");
const prisma_service_1 = require("../../prisma.service");
const generateString_1 = require("../../helpers/generateString");
let TransactionService = class TransactionService {
    constructor(prisma) {
        this.prisma = prisma;
    }
    async initiateFlutterwaveTransaction(input) {
        const { amount, email, name, phoneNumber, bondId, userId } = input;
        const tx_ref = (0, generateString_1.makeid)(8);
        var data = JSON.stringify({
            tx_ref,
            amount,
            currency: "USD",
            redirect_url: "https://webhook.site/9d0b00ba-9a69-44fa-a43d-a82c33c36fdc",
            customer: {
                email,
                phonenumber: phoneNumber,
                name,
            },
            payment_options: "card, mobilemoneyghana, ussd",
            customizations: {
                title: "SIBx",
            },
        });
        try {
            await this.prisma.purchsedBond.create({
                data: {
                    amount,
                    paymentType: client_1.PAYMENT_TYPE.CARD,
                    bond: { connect: { id: bondId } },
                    user: { connect: { id: userId } },
                    tx_ref,
                },
            });
            const response = await (0, axios_1.default)({
                method: "post",
                url: "https://api.flutterwave.com/v3/payments",
                headers: {
                    Authorization: `Bearer ${process.env.FLUTTERWAVE_SECRET_KEY}`,
                    "Content-Type": "application/json",
                },
                data: data,
            });
            return response.data;
        }
        catch (err) {
            console.log(err);
            console.log(err.response.data.error);
        }
    }
    async initiateLazerpayTransaction(input) {
        console.log("LAZER");
        const lazerpay = new lazerpay_node_sdk_1.default(process.env.LAZERPAY_PUBLIC_KEY, process.env.LAZERPAY_SECRET_KEY);
        const { amount, email, name } = input;
        try {
            const transaction_payload = {
                reference: (0, generateString_1.makeid)(8),
                customer_name: name,
                customer_email: email,
                coin: "USDC",
                currency: "USD",
                fiatAmount: "100",
                amount: amount.toString(),
                acceptPartialPayment: true,
            };
            const response = await lazerpay.Payment.initializePayment(transaction_payload);
            console.log(response);
            return;
        }
        catch (error) {
            console.log(error);
        }
    }
    async verifyFlutterwaveCheckout(data, res) {
        console.log(data);
        const tx_ref = data.tx_ref;
        const status = data.status;
        const amount = data.amount;
        const user = await this.prisma.user.findUnique({
            where: { email: data.customer.email },
        });
        if (status === "successful") {
            await this.prisma.purchsedBond.updateMany({
                where: {
                    AND: [
                        { tx_ref: { equals: tx_ref } },
                        { userId: { equals: user.id } },
                        { paid: { equals: false } },
                        { amount: { equals: amount } },
                    ],
                },
                data: {
                    paid: true,
                },
            });
        }
        return res.status(200).end();
    }
};
TransactionService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], TransactionService);
exports.TransactionService = TransactionService;
//# sourceMappingURL=transaction.service.js.map