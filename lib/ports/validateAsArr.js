"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateAsArr = void 0;
const ducktyper_1 = require("ducktyper");
function validateAsArr(validator, options = {}) {
    validator = (0, ducktyper_1.makeDuck)([validator]);
    if (options) {
        validator = (0, ducktyper_1.duckfaults)(validator, options);
    }
    return validator;
}
exports.validateAsArr = validateAsArr;
