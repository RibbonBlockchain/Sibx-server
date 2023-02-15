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
exports.BondController = void 0;
const common_1 = require("@nestjs/common");
const client_1 = require("@prisma/client");
const auth_decorator_1 = require("../auth/decorators/auth.decorator");
const bond_service_1 = require("./bond.service");
const bond_request_1 = require("./dto/bond.request");
let BondController = class BondController {
    constructor(bondService) {
        this.bondService = bondService;
    }
    createBond(req, input) {
        return this.bondService.createBond(req.user.userId, input);
    }
    findAllBonds() {
        return this.bondService.findAllBonds();
    }
    findOneBond(params) {
        return this.bondService.findOneBond(params.id);
    }
    findBondType(type) {
        return this.bondService.findBondType(type);
    }
};
__decorate([
    (0, auth_decorator_1.Auth)(),
    (0, common_1.Post)("create"),
    __param(0, (0, common_1.Request)()),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, bond_request_1.CreateBondInput]),
    __metadata("design:returntype", void 0)
], BondController.prototype, "createBond", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], BondController.prototype, "findAllBonds", null);
__decorate([
    (0, common_1.Get)(":id"),
    __param(0, (0, common_1.Param)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], BondController.prototype, "findOneBond", null);
__decorate([
    (0, common_1.Get)("type"),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], BondController.prototype, "findBondType", null);
BondController = __decorate([
    (0, common_1.Controller)("bond"),
    __metadata("design:paramtypes", [bond_service_1.BondService])
], BondController);
exports.BondController = BondController;
//# sourceMappingURL=bond.controller.js.map