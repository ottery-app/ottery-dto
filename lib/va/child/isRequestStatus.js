"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isRequestStatus = void 0;
const ducktyper_1 = require("ducktyper");
const requestStatus_enum_1 = require("../../types/child/requestStatus.enum");
const makeEnumVal_1 = require("../makeEnumVal");
exports.isRequestStatus = (0, ducktyper_1.duckfaults)((0, ducktyper_1.makeDuck)((0, makeEnumVal_1.makeEnumVal)(requestStatus_enum_1.requestStatus)), {
    message: "Not a valid request status",
});
