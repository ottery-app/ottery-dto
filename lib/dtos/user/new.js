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
exports.NewUserDto = void 0;
const ducktyper_1 = require("ducktyper");
const email_1 = require("../../va/contact/email");
const names_1 = require("../../va/person/names");
const auth_1 = require("../../va/auth/auth");
const image_1 = require("../files/image");
class NewUserDto extends ducktyper_1.DuckDto {
}
__decorate([
    (0, ducktyper_1.duckorate)((0, ducktyper_1.dtoToIsDuck)(image_1.ImageDto), {
        message: "Not a valid Image",
        allowUndefined: false,
    }),
    __metadata("design:type", image_1.ImageDto)
], NewUserDto.prototype, "pfp", void 0);
__decorate([
    (0, ducktyper_1.duckorate)(email_1.isEmail),
    __metadata("design:type", String)
], NewUserDto.prototype, "email", void 0);
__decorate([
    (0, ducktyper_1.duckorate)(auth_1.isPassword),
    __metadata("design:type", String)
], NewUserDto.prototype, "password", void 0);
__decorate([
    (0, ducktyper_1.duckorate)(names_1.isFirstName),
    __metadata("design:type", String)
], NewUserDto.prototype, "firstName", void 0);
__decorate([
    (0, ducktyper_1.duckorate)(names_1.isLastName),
    __metadata("design:type", String)
], NewUserDto.prototype, "lastName", void 0);
exports.NewUserDto = NewUserDto;
