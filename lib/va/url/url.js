"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isUrl = void 0;
const ducktyper_1 = require("ducktyper");
exports.isUrl = (0, ducktyper_1.duckfaults)((0, ducktyper_1.makeDuck)(String), {
    message: "Not a valid url"
});
