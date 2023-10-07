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
exports.DataFieldDto = void 0;
const ducktyper_1 = require("ducktyper");
const input_enums_1 = require("../../types/input/input.enums");
const auth_1 = require("../../va/auth/auth");
//TODO add typing and specify the validators to something more specific then string
class DataFieldDto extends ducktyper_1.DuckDto {
}
__decorate([
    (0, ducktyper_1.duckorate)(auth_1.isId),
    __metadata("design:type", String)
], DataFieldDto.prototype, "formField", void 0);
__decorate([
    (0, ducktyper_1.duckorate)(ducktyper_1.isString, {
        allowEmpty: false,
        message: 'Not a valid field label',
    }),
    __metadata("design:type", String)
], DataFieldDto.prototype, "label", void 0);
__decorate([
    (0, ducktyper_1.duckorate)(ducktyper_1.isString, {
        allowEmpty: false,
        message: 'Not a valid field type',
    }),
    __metadata("design:type", String)
], DataFieldDto.prototype, "type", void 0);
__decorate([
    (0, ducktyper_1.duckorate)((0, ducktyper_1.makeDuck)(ducktyper_1.Any), {
        allowEmpty: false,
        message: 'invalid value',
    }),
    __metadata("design:type", Object)
], DataFieldDto.prototype, "value", void 0);
exports.DataFieldDto = DataFieldDto;
