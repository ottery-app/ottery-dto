"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isSchemaName = void 0;
const ducktyper_1 = require("ducktyper");
const isUpperCase = (0, ducktyper_1.makeDuck)((str) => {
    return str.charAt(0) === str.charAt(0).toUpperCase();
});
exports.isSchemaName = (0, ducktyper_1.duckfaults)((0, ducktyper_1.makeDuck)(ducktyper_1.isString, isUpperCase), {
    message: "Not a valid schema name must be string and capitalized",
});
