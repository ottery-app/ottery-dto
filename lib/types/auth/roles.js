"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.role = void 0;
var role;
(function (role) {
    /** If a user is logged in */
    role["LOGGEDIN"] = "loggedin";
    /** If a user has activated their account */
    role["ACTIVATED"] = "activated";
    /** If a user is functioning as (is?) a guardian */
    role["GUARDIAN"] = "guardian";
    /** If a user is functioning as (is?) a caretaker */
    role["CARETAKER"] = "caretaker";
})(role = exports.role || (exports.role = {}));
