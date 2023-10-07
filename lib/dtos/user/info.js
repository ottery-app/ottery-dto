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
exports.UserInfoDto = void 0;
const ducktyper_1 = require("ducktyper");
const image_1 = require("../files/image");
const auth_1 = require("../../va/auth/auth");
class UserInfoDto extends ducktyper_1.DuckDto {
    constructor(partial) {
        super();
        //I AM SORRY I dont want to lie to you. But alas this can be undefined and thats okay.
        this._id = partial._id;
        this.firstName = partial.firstName;
        this.lastName = partial.lastName;
        this.pfp = partial.pfp;
    }
}
__decorate([
    (0, ducktyper_1.duckorate)(auth_1.isId, {
        message: "Not a valid id",
        allowUndefined: false,
    }),
    __metadata("design:type", String)
], UserInfoDto.prototype, "_id", void 0);
__decorate([
    (0, ducktyper_1.duckorate)((0, ducktyper_1.dtoToIsDuck)(image_1.ImageDto), {
        message: "Not a valid Image",
        allowUndefined: false,
    }),
    __metadata("design:type", image_1.ImageDto)
], UserInfoDto.prototype, "pfp", void 0);
__decorate([
    (0, ducktyper_1.duckorate)(ducktyper_1.isString, {
        message: "Not a valid first name",
        allowEmpty: false,
    }),
    __metadata("design:type", String)
], UserInfoDto.prototype, "firstName", void 0);
__decorate([
    (0, ducktyper_1.duckorate)(ducktyper_1.isString, {
        message: "Not a valid last name",
        allowEmpty: false,
    }),
    __metadata("design:type", String)
], UserInfoDto.prototype, "lastName", void 0);
exports.UserInfoDto = UserInfoDto;
