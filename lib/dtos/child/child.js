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
exports.CreateChildDto = void 0;
const ducktyper_1 = require("ducktyper");
const names_1 = require("../../va/person/names");
const gender_1 = require("../../va/person/gender");
const image_1 = require("../files/image");
const gender_2 = require("../../types/gender/gender");
const date_1 = require("../../va/date/date");
class CreateChildDto extends ducktyper_1.DuckDto {
}
__decorate([
    (0, ducktyper_1.duckorate)((0, ducktyper_1.dtoToIsDuck)(image_1.ImageDto), {
        message: "Not a valid Image",
        allowUndefined: false,
    }),
    __metadata("design:type", Object)
], CreateChildDto.prototype, "pfp", void 0);
__decorate([
    (0, ducktyper_1.duckorate)(names_1.isFirstName),
    __metadata("design:type", String)
], CreateChildDto.prototype, "firstName", void 0);
__decorate([
    (0, ducktyper_1.duckorate)(names_1.isMiddleName),
    __metadata("design:type", String)
], CreateChildDto.prototype, "middleName", void 0);
__decorate([
    (0, ducktyper_1.duckorate)(names_1.isLastName),
    __metadata("design:type", String)
], CreateChildDto.prototype, "lastName", void 0);
__decorate([
    (0, ducktyper_1.duckorate)(date_1.isDate, {
        message: "Not a valid birth date",
    }),
    __metadata("design:type", Number)
], CreateChildDto.prototype, "dateOfBirth", void 0);
__decorate([
    (0, ducktyper_1.duckorate)(gender_1.isGender),
    __metadata("design:type", String)
], CreateChildDto.prototype, "gender", void 0);
exports.CreateChildDto = CreateChildDto;
