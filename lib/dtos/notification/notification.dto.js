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
exports.NotificationDto = void 0;
const ducktyper_1 = require("ducktyper");
const notification_enum_1 = require("../../types/notification/notification.enum");
const date_1 = require("../../va/date/date");
const isNotificationType_1 = require("../../va/notification/isNotificationType");
const multischeme_1 = require("../perms/multischeme");
class NotificationDto extends ducktyper_1.DuckDto {
}
__decorate([
    (0, ducktyper_1.duckorate)((0, ducktyper_1.dtoToIsDuck)(multischeme_1.MultiSchemeDto), {
        message: "not a valid sender",
    }),
    __metadata("design:type", multischeme_1.MultiSchemeDto)
], NotificationDto.prototype, "sender", void 0);
__decorate([
    (0, ducktyper_1.duckorate)(isNotificationType_1.isNotificationType),
    __metadata("design:type", String)
], NotificationDto.prototype, "type", void 0);
__decorate([
    (0, ducktyper_1.duckorate)(ducktyper_1.isString, {
        message: "message must be a string",
    }),
    __metadata("design:type", String)
], NotificationDto.prototype, "message", void 0);
__decorate([
    (0, ducktyper_1.duckorate)(ducktyper_1.isBoolean, {
        message: "read must be a boolean"
    }),
    __metadata("design:type", Boolean)
], NotificationDto.prototype, "read", void 0);
__decorate([
    (0, ducktyper_1.duckorate)(date_1.isDate),
    __metadata("design:type", Number)
], NotificationDto.prototype, "time", void 0);
exports.NotificationDto = NotificationDto;
