"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isLastName = exports.isMiddleName = exports.isFirstName = exports.isName = void 0;
const ducktyper_1 = require("ducktyper");
exports.isName = (0, ducktyper_1.duckfaults)((0, ducktyper_1.makeDuck)(val => /^([^0-9]*)$/.test(val) && val !== "" && (0, ducktyper_1.isString)(val)), {
    message: "Not a valid name",
});
exports.isFirstName = (0, ducktyper_1.duckfaults)(exports.isName, {
    message: "Not a valid first name",
});
exports.isMiddleName = (0, ducktyper_1.duckfaults)(exports.isName, {
    message: "Not a valid middle name",
});
exports.isLastName = (0, ducktyper_1.duckfaults)(exports.isName, {
    message: "Not a valid last name",
});
