"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isRequestType = void 0;
const ducktyper_1 = require("ducktyper");
const requestType_enum_1 = require("../../types/child/requestType.enum");
const makeEnumVal_1 = require("../makeEnumVal");
exports.isRequestType = (0, ducktyper_1.duckfaults)((0, ducktyper_1.makeDuck)((0, makeEnumVal_1.makeEnumVal)(requestType_enum_1.requestType)), {
    message: "Not a valid request type",
});
