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
exports.CreateEventDto = exports.EventDto = void 0;
const ducktyper_1 = require("ducktyper");
const currency_1 = require("../../types/currency/currency");
const auth_1 = require("../../va/auth/auth");
const date_1 = require("../../va/date/date");
const ical_1 = require("../../va/date/ical");
const address_1 = require("../../va/geo/address");
const money_1 = require("../../va/money/money");
const customFormField_1 = require("../customForm/customFormField");
class EventDto extends ducktyper_1.DuckDto {
}
__decorate([
    (0, ducktyper_1.duckorate)(ducktyper_1.isString, {
        message: "Not a valid summary",
        allowEmpty: false,
    }),
    __metadata("design:type", String)
], EventDto.prototype, "summary", void 0);
__decorate([
    (0, ducktyper_1.duckorate)(auth_1.isId, {
        message: "Not a valid orginization",
        allowEmpty: false,
    }),
    __metadata("design:type", String)
], EventDto.prototype, "org", void 0);
__decorate([
    (0, ducktyper_1.duckorate)(ducktyper_1.isString, {
        message: "Not a valid description",
        allowEmpty: false,
    }),
    __metadata("design:type", String)
], EventDto.prototype, "description", void 0);
__decorate([
    (0, ducktyper_1.duckorate)(date_1.isDate, {
        message: "Not a valid start date"
    }),
    __metadata("design:type", Number)
], EventDto.prototype, "start", void 0);
__decorate([
    (0, ducktyper_1.duckorate)(date_1.isDate, {
        message: "Not a valid end date"
    }),
    __metadata("design:type", Number)
], EventDto.prototype, "end", void 0);
__decorate([
    (0, ducktyper_1.duckorate)(address_1.isAddress, {
        message: "Not a valid location",
    }),
    __metadata("design:type", String)
], EventDto.prototype, "location", void 0);
__decorate([
    (0, ducktyper_1.duckorate)((0, ducktyper_1.makeDuck)([ical_1.isRecurrence]), {
        message: "Not a valid recurrence",
        allowEmpty: false,
    }),
    __metadata("design:type", Array)
], EventDto.prototype, "recurrence", void 0);
__decorate([
    (0, ducktyper_1.duckorate)((0, ducktyper_1.makeDuck)([auth_1.isId]), {
        message: "Issue in the volenteer signup form",
        allowEmptyArray: true,
    }),
    __metadata("design:type", Array)
], EventDto.prototype, "volenteerSignUp", void 0);
__decorate([
    (0, ducktyper_1.duckorate)((0, ducktyper_1.makeDuck)([auth_1.isId]), {
        message: "Issue in the attendee signup form",
        allowEmptyArray: true,
    }),
    __metadata("design:type", Array)
], EventDto.prototype, "attendeeSignUp", void 0);
__decorate([
    (0, ducktyper_1.duckorate)(money_1.isCost),
    __metadata("design:type", String)
], EventDto.prototype, "cost", void 0);
__decorate([
    (0, ducktyper_1.duckorate)(ducktyper_1.isBoolean, {
        message: "Publicity must be marked",
    }),
    __metadata("design:type", Boolean)
], EventDto.prototype, "public", void 0);
exports.EventDto = EventDto;
class CreateEventDto extends ducktyper_1.DuckDto {
}
__decorate([
    (0, ducktyper_1.duckorate)(ducktyper_1.isString, {
        message: "Not a valid summary",
        allowEmpty: false,
    }),
    __metadata("design:type", String)
], CreateEventDto.prototype, "summary", void 0);
__decorate([
    (0, ducktyper_1.duckorate)(auth_1.isId, {
        message: "Not a valid orginization",
        allowEmpty: false,
    }),
    __metadata("design:type", String)
], CreateEventDto.prototype, "org", void 0);
__decorate([
    (0, ducktyper_1.duckorate)(ducktyper_1.isString, {
        message: "Not a valid description",
        allowEmpty: false,
    }),
    __metadata("design:type", String)
], CreateEventDto.prototype, "description", void 0);
__decorate([
    (0, ducktyper_1.duckorate)(date_1.isDate, {
        message: "Not a valid start date"
    }),
    __metadata("design:type", Number)
], CreateEventDto.prototype, "start", void 0);
__decorate([
    (0, ducktyper_1.duckorate)(date_1.isDate, {
        message: "Not a valid end date"
    }),
    __metadata("design:type", Number)
], CreateEventDto.prototype, "end", void 0);
__decorate([
    (0, ducktyper_1.duckorate)(address_1.isAddress, {
        message: "Not a valid location",
    }),
    __metadata("design:type", String)
], CreateEventDto.prototype, "location", void 0);
__decorate([
    (0, ducktyper_1.duckorate)((0, ducktyper_1.makeDuck)([ical_1.isRecurrence]), {
        message: "Not a valid recurrence",
        allowEmpty: false,
    }),
    __metadata("design:type", Array)
], CreateEventDto.prototype, "recurrence", void 0);
__decorate([
    (0, ducktyper_1.duckorate)((0, ducktyper_1.makeDuck)([customFormField_1.CustomFormFieldDto]), {
        message: "Issue in the volenteer signup form",
        allowEmptyArray: true,
    }),
    __metadata("design:type", Array)
], CreateEventDto.prototype, "volenteerSignUp", void 0);
__decorate([
    (0, ducktyper_1.duckorate)((0, ducktyper_1.makeDuck)([customFormField_1.CustomFormFieldDto]), {
        message: "Issue in the attendee signup form",
        allowEmptyArray: true,
    }),
    __metadata("design:type", Array)
], CreateEventDto.prototype, "attendeeSignUp", void 0);
__decorate([
    (0, ducktyper_1.duckorate)(money_1.isCost),
    __metadata("design:type", String)
], CreateEventDto.prototype, "cost", void 0);
__decorate([
    (0, ducktyper_1.duckorate)(ducktyper_1.isBoolean, {
        message: "Publicity must be marked",
    }),
    __metadata("design:type", Boolean)
], CreateEventDto.prototype, "public", void 0);
exports.CreateEventDto = CreateEventDto;
