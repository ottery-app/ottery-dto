"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isUserLink = void 0;
const ducktyper_1 = require("ducktyper");
const auth_1 = require("../auth/auth");
exports.isUserLink = (0, ducktyper_1.duckfaults)((0, ducktyper_1.makeDuck)([auth_1.isId, auth_1.isId]), {
    message: "not a valid user link",
});
