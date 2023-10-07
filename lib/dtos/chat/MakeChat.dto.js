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
exports.MakeChatDto = void 0;
const ducktyper_1 = require("ducktyper");
const auth_1 = require("../../va/auth/auth");
class MakeChatDto extends ducktyper_1.DuckDto {
    constructor() {
        super(...arguments);
        this.name = 'unnamed';
    }
}
__decorate([
    (0, ducktyper_1.duckorate)(ducktyper_1.isString, {
        message: "Not a valid name"
    }),
    __metadata("design:type", String)
], MakeChatDto.prototype, "name", void 0);
__decorate([
    (0, ducktyper_1.duckorate)((0, ducktyper_1.makeDuck)([auth_1.isId]), {
        message: "Users must be a list of user ids",
        allowUndefined: false,
    }),
    __metadata("design:type", Array)
], MakeChatDto.prototype, "users", void 0);
exports.MakeChatDto = MakeChatDto;
