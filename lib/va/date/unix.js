"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isUnixDate = void 0;
const ducktyper_1 = require("ducktyper");
exports.isUnixDate = (0, ducktyper_1.duckfaults)((0, ducktyper_1.makeDuck)((val) => {
    return (0, ducktyper_1.isNumber)(val) && val === Math.floor(val);
}), {
    message: "Not a valid date",
});
