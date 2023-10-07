"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.classifyDto = void 0;
const ducktyper_1 = require("ducktyper");
function classifyDto(dto, options) {
    return (0, ducktyper_1.classifyDuck)(dto, options);
}
exports.classifyDto = classifyDto;
