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
exports.makePermLinkDto = exports.PermLinkDto = void 0;
const ducktyper_1 = require("ducktyper");
const auth_1 = require("../../va/auth/auth");
const multischeme_1 = require("./multischeme");
class PermLinkDto extends ducktyper_1.DuckDto {
}
__decorate([
    (0, ducktyper_1.duckorate)((0, ducktyper_1.dtoToIsDuck)(multischeme_1.MultiSchemeDto), {
        message: "Not a valid owner",
    }),
    __metadata("design:type", multischeme_1.MultiSchemeDto)
], PermLinkDto.prototype, "owner", void 0);
__decorate([
    (0, ducktyper_1.duckorate)(auth_1.isId, {
        message: "Not a valid perm id",
    }),
    __metadata("design:type", String)
], PermLinkDto.prototype, "perms", void 0);
exports.PermLinkDto = PermLinkDto;
function makePermLinkDto(obj) {
    const link = new PermLinkDto();
    link.owner = obj.owner;
    link.perms = obj.perms;
    return link;
}
exports.makePermLinkDto = makePermLinkDto;
