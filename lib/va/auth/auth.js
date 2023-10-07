"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.arePerms = exports.isId = exports.isPassword = exports.isActivationCode = void 0;
const ducktyper_1 = require("ducktyper");
exports.isActivationCode = (0, ducktyper_1.duckfaults)((0, ducktyper_1.makeDuck)(String), {
    message: "Not a valid activation code",
    allowEmpty: false,
});
exports.isPassword = (0, ducktyper_1.duckfaults)((0, ducktyper_1.makeDuck)(() => true), {
    message: "Not a valid password",
});
exports.isId = (0, ducktyper_1.duckfaults)((0, ducktyper_1.makeDuck)(String), {
    message: 'Not a valid id',
});
exports.arePerms = (0, ducktyper_1.duckfaults)((0, ducktyper_1.makeDuck)([String]), {
    message: "Not a valid perm"
});
