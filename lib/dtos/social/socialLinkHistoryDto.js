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
exports.SocialLinkHistoryDto = void 0;
const ducktyper_1 = require("ducktyper");
const auth_1 = require("../../va/auth/auth");
const socialLinkState_1 = require("../../types/social/socialLinkState");
const isSocialLinkState_1 = require("../../va/social/isSocialLinkState");
const date_1 = require("../../va/date/date");
class SocialLinkHistoryDto extends ducktyper_1.DuckDto {
}
__decorate([
    (0, ducktyper_1.duckorate)(auth_1.isId, {
        message: "not a valid activator",
    }),
    __metadata("design:type", String)
], SocialLinkHistoryDto.prototype, "activator", void 0);
__decorate([
    (0, ducktyper_1.duckorate)(isSocialLinkState_1.isSocialLinkState, {
        message: "not a valid social state"
    }),
    __metadata("design:type", String)
], SocialLinkHistoryDto.prototype, "state", void 0);
__decorate([
    (0, ducktyper_1.duckorate)(date_1.isDate),
    __metadata("design:type", Number)
], SocialLinkHistoryDto.prototype, "timestamp", void 0);
exports.SocialLinkHistoryDto = SocialLinkHistoryDto;
