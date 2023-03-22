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
exports.UserProfileInput = exports.UserRegisterInput = void 0;
const client_1 = require("@prisma/client");
const class_validator_1 = require("class-validator");
class UserRegisterInput {
}
__decorate([
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], UserRegisterInput.prototype, "name", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], UserRegisterInput.prototype, "username", void 0);
__decorate([
    (0, class_validator_1.IsEmail)(),
    __metadata("design:type", String)
], UserRegisterInput.prototype, "email", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], UserRegisterInput.prototype, "password", void 0);
__decorate([
    (0, class_validator_1.IsEnum)(client_1.ACCOUNT_TYPE),
    __metadata("design:type", String)
], UserRegisterInput.prototype, "accountType", void 0);
exports.UserRegisterInput = UserRegisterInput;
class UserProfileInput {
}
__decorate([
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], UserProfileInput.prototype, "phoneNumber", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], UserProfileInput.prototype, "city", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], UserProfileInput.prototype, "state", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], UserProfileInput.prototype, "zipCode", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], UserProfileInput.prototype, "addressOne", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], UserProfileInput.prototype, "addressTwo", void 0);
exports.UserProfileInput = UserProfileInput;
//# sourceMappingURL=user.request.js.map