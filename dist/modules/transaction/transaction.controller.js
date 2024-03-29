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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TransactionController = void 0;
const common_1 = require("@nestjs/common");
const request_dto_1 = require("./dto/request.dto");
const transaction_service_1 = require("./transaction.service");
let TransactionController = class TransactionController {
    constructor(transactionService) {
        this.transactionService = transactionService;
    }
    initiateFlutterwavePayment(input) {
        return this.transactionService.initiateFlutterwaveTransaction(input);
    }
    confirmFlutterPayment(res, req) {
        console.log("Flutter", req.body);
        return this.transactionService.verifyFlutterwaveCheckout(req.body, res);
    }
    initiateLazerpayPayment(input) {
        return this.transactionService.initiateLazerpayTransaction(input);
    }
};
__decorate([
    (0, common_1.Post)("initiate-flutterwave-payment"),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [request_dto_1.InitiatePaymentParams]),
    __metadata("design:returntype", void 0)
], TransactionController.prototype, "initiateFlutterwavePayment", null);
__decorate([
    (0, common_1.Post)("flutterwave-webhook"),
    __param(0, (0, common_1.Res)()),
    __param(1, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", void 0)
], TransactionController.prototype, "confirmFlutterPayment", null);
__decorate([
    (0, common_1.Post)("initiate-lazerpay-payment"),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [request_dto_1.InitiatePaymentParams]),
    __metadata("design:returntype", void 0)
], TransactionController.prototype, "initiateLazerpayPayment", null);
TransactionController = __decorate([
    (0, common_1.Controller)("transaction"),
    __metadata("design:paramtypes", [transaction_service_1.TransactionService])
], TransactionController);
exports.TransactionController = TransactionController;
//# sourceMappingURL=transaction.controller.js.map