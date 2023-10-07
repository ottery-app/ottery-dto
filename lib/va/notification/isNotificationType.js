"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isNotificationType = void 0;
const ducktyper_1 = require("ducktyper");
const notification_enum_1 = require("../../types/notification/notification.enum");
const makeEnumVal_1 = require("../makeEnumVal");
exports.isNotificationType = (0, ducktyper_1.duckfaults)((0, ducktyper_1.makeDuck)((0, makeEnumVal_1.makeEnumVal)(notification_enum_1.notification)), {
    message: "not a valid notification type",
});
