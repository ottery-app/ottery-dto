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
exports.UpdateLinkDto = void 0;
const ducktyper_1 = require("ducktyper");
const auth_1 = require("../../va/auth/auth");
const socialLinkState_1 = require("../../types/social/socialLinkState");
const isSocialLinkState_1 = require("../../va/social/isSocialLinkState");
class UpdateLinkDto extends ducktyper_1.DuckDto {
}
__decorate([
    (0, ducktyper_1.duckorate)(auth_1.isId, {
        message: "not a valid target id",
    }),
    __metadata("design:type", String)
], UpdateLinkDto.prototype, "target", void 0);
__decorate([
    (0, ducktyper_1.duckorate)(isSocialLinkState_1.isSocialLinkState, {
        message: "not a valid social state"
    }),
    __metadata("design:type", String)
], UpdateLinkDto.prototype, "state", void 0);
exports.UpdateLinkDto = UpdateLinkDto;
