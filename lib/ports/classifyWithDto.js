"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.classifyWithDto = void 0;
const ducktyper_1 = require("ducktyper");
const cache = new Map();
function classifyWithDto(dto, obj, options) {
    if (!cache.get(dto)) {
        cache.set(dto, (0, ducktyper_1.dtoToIsDuck)(dto));
    }
    return cache.get(dto)(obj, options);
}
exports.classifyWithDto = classifyWithDto;
