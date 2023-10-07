"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isSocialLinkState = void 0;
const ducktyper_1 = require("ducktyper");
const socialLinkState_1 = require("../../types/social/socialLinkState");
const makeEnumVal_1 = require("../makeEnumVal");
exports.isSocialLinkState = (0, ducktyper_1.duckfaults)((0, ducktyper_1.makeDuck)((0, makeEnumVal_1.makeEnumVal)(socialLinkState_1.socialLinkState)), {
    message: "not a valid social link state",
});
