"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useDtoAsArr = void 0;
const ducktyper_1 = require("ducktyper");
const isDuckDto_1 = require("../va/isDuckDto");
function useDtoAsArr(dto, options) {
    (0, isDuckDto_1.isDuckDto)(dto, {
        throw: true,
        message: "must use a dto for useDtoAsArr"
    });
    return (0, ducktyper_1.duckfaults)((0, ducktyper_1.makeDuck)([dto]), options);
}
exports.useDtoAsArr = useDtoAsArr;
