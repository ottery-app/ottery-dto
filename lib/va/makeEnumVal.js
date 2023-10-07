"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.makeEnumVal = void 0;
function makeEnumVal(enummerator) {
    return function isEnum(state) {
        const keys = Object.values(enummerator).filter(val => val === state);
        return keys.length > 0;
    };
}
exports.makeEnumVal = makeEnumVal;
