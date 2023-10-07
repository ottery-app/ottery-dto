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
exports.ChildRequestDto = void 0;
const ducktyper_1 = require("ducktyper");
const auth_1 = require("../../va/auth/auth");
const isRequestStatus_1 = require("../../va/child/isRequestStatus");
const isRequestType_1 = require("../../va/child/isRequestType");
const requestType_enum_1 = require("../../types/child/requestType.enum");
const requestStatus_enum_1 = require("../../types/child/requestStatus.enum");
class ChildRequestDto extends ducktyper_1.DuckDto {
}
__decorate([
    (0, ducktyper_1.duckorate)(auth_1.isId, {
        message: "Not a valid guardian"
    }),
    __metadata("design:type", String)
], ChildRequestDto.prototype, "guardian", void 0);
__decorate([
    (0, ducktyper_1.duckorate)(auth_1.isId, {
        message: "Not a valid event"
    }),
    __metadata("design:type", String)
], ChildRequestDto.prototype, "event", void 0);
__decorate([
    (0, ducktyper_1.duckorate)(auth_1.isId, {
        message: "Not a valid child"
    }),
    __metadata("design:type", String)
], ChildRequestDto.prototype, "child", void 0);
__decorate([
    (0, ducktyper_1.duckorate)(isRequestStatus_1.isRequestStatus, {
        message: "Not a valid child",
        allowUndefined: true,
    }),
    __metadata("design:type", String)
], ChildRequestDto.prototype, "status", void 0);
__decorate([
    (0, ducktyper_1.duckorate)(isRequestType_1.isRequestType, {
        message: "Not a valid request type",
        allowUndefined: true,
    }),
    __metadata("design:type", String)
], ChildRequestDto.prototype, "type", void 0);
exports.ChildRequestDto = ChildRequestDto;
