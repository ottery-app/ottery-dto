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
exports.CustomFormFieldDto = void 0;
const ducktyper_1 = require("ducktyper");
//TODO add typing and specify the validators to something more specific then string
class CustomFormFieldDto extends ducktyper_1.DuckDto {
}
__decorate([
    (0, ducktyper_1.duckorate)(ducktyper_1.isString, {
        allowEmpty: false,
        message: 'Not a valid field label',
    }),
    __metadata("design:type", String)
], CustomFormFieldDto.prototype, "label", void 0);
__decorate([
    (0, ducktyper_1.duckorate)(ducktyper_1.isString, {
        allowEmpty: false,
        message: 'Not a valid field type',
    }),
    __metadata("design:type", String)
], CustomFormFieldDto.prototype, "type", void 0);
__decorate([
    (0, ducktyper_1.duckorate)(ducktyper_1.isString, {
        allowEmpty: false,
        message: 'Not a valid note for what the field is for',
    }),
    __metadata("design:type", String)
], CustomFormFieldDto.prototype, "note", void 0);
__decorate([
    (0, ducktyper_1.duckorate)(ducktyper_1.isBoolean, {
        messsage: "must be marked as permanent",
    }),
    __metadata("design:type", Boolean)
], CustomFormFieldDto.prototype, "permanent", void 0);
__decorate([
    (0, ducktyper_1.duckorate)(ducktyper_1.isBoolean, {
        message: "Optinality must be set",
    }),
    __metadata("design:type", Boolean)
], CustomFormFieldDto.prototype, "optional", void 0);
exports.CustomFormFieldDto = CustomFormFieldDto;
