"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isCost = exports.isUSD = void 0;
const ducktyper_1 = require("ducktyper");
exports.isUSD = (0, ducktyper_1.duckfaults)((0, ducktyper_1.makeDuck)(val => val >= 0), {
    message: "Not a valid USD"
});
exports.isCost = (0, ducktyper_1.duckfaults)(exports.isUSD, {
    message: "Not a valid cost"
});
