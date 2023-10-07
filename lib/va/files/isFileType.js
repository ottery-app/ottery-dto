"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isFileType = void 0;
const ducktyper_1 = require("ducktyper");
exports.isFileType = (0, ducktyper_1.duckfaults)((0, ducktyper_1.makeDuck)(String), {
    allowEmpty: false,
    message: "Not a valid file type",
});
