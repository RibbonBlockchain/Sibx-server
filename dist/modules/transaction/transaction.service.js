"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TransactionService = void 0;
const common_1 = require("@nestjs/common");
const axios_1 = require("axios");
let TransactionService = class TransactionService {
    async initiateFlutterwaveTransaction(input) {
        const { amount, email, name, phoneNumber } = input;
        var data = JSON.stringify({
            tx_ref: 'hooli-tx-1920bbtytty',
            amount,
            currency: 'USD',
            redirect_url: 'https://webhook.site/9d0b00ba-9a69-44fa-a43d-a82c33c36fdc',
            customer: {
                email,
                phonenumber: phoneNumber,
                name,
            },
            payment_options: 'card, mobilemoneyghana, ussd',
            customizations: {
                title: 'SIBx',
            },
        });
        try {
            const response = await (0, axios_1.default)({
                method: 'post',
                url: 'https://api.flutterwave.com/v3/payments',
                headers: {
                    Authorization: `Bearer ${process.env.FLUTTERWAVE_SECRET_KEY}`,
                    'Content-Type': 'application/json',
                },
                data: data,
            });
            return response.data;
        }
        catch (err) {
            console.log(err.response.data.error);
        }
    }
};
TransactionService = __decorate([
    (0, common_1.Injectable)()
], TransactionService);
exports.TransactionService = TransactionService;
//# sourceMappingURL=transaction.service.js.map