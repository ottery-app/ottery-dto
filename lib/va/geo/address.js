"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isAddress = void 0;
const ducktyper_1 = require("ducktyper");
exports.isAddress = (0, ducktyper_1.duckfaults)((0, ducktyper_1.makeDuck)(String), {
    message: "Not a valid address",
});
