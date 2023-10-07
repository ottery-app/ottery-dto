"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useValidatorAsArr = void 0;
const ducktyper_1 = require("ducktyper");
function useValidatorAsArr(validator, options) {
    return (0, ducktyper_1.duckfaults)((0, ducktyper_1.makeDuck)([validator]), options);
}
exports.useValidatorAsArr = useValidatorAsArr;
