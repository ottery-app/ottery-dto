"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isEmail = void 0;
const ducktyper_1 = require("ducktyper");
const reg_email = /^[\w-.]+@([\w-]+.)+[\w-]{2,4}$/; //??? might be an issue in this regex
exports.isEmail = (0, ducktyper_1.duckfaults)((0, ducktyper_1.makeDuck)((val) => reg_email.test(val)), {
    message: "Not a valid email",
});
