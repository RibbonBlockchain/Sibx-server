"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BondModule = void 0;
const common_1 = require("@nestjs/common");
const bond_service_1 = require("./bond.service");
const bond_controller_1 = require("./bond.controller");
const prisma_service_1 = require("../../prisma.service");
const cloudinary_module_1 = require("../cloudinary/cloudinary.module");
let BondModule = class BondModule {
};
BondModule = __decorate([
    (0, common_1.Module)({
        controllers: [bond_controller_1.BondController],
        providers: [bond_service_1.BondService, prisma_service_1.PrismaService],
        imports: [cloudinary_module_1.CloudinaryModule],
    })
], BondModule);
exports.BondModule = BondModule;
//# sourceMappingURL=bond.module.js.map