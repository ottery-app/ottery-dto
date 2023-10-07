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
exports.MessageDto = void 0;
const ducktyper_1 = require("ducktyper");
const auth_1 = require("../../va/auth/auth");
const date_1 = require("../../va/date/date");
class MessageDto extends ducktyper_1.DuckDto {
    constructor(senderId, message) {
        super();
        this.date = new Date().getTime();
        this.message = message;
        this.sender = senderId;
    }
}
__decorate([
    (0, ducktyper_1.duckorate)(auth_1.isId, {
        message: "Not a valid sender id",
    }),
    __metadata("design:type", String)
], MessageDto.prototype, "sender", void 0);
__decorate([
    (0, ducktyper_1.duckorate)(ducktyper_1.isString, {
        message: "Not a valid message",
    }),
    __metadata("design:type", String)
], MessageDto.prototype, "message", void 0);
__decorate([
    (0, ducktyper_1.duckorate)(date_1.isDate, {
        message: "Not a valid date",
    }),
    __metadata("design:type", Number)
], MessageDto.prototype, "date", void 0);
exports.MessageDto = MessageDto;
