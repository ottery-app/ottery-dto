"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isRecurrence = void 0;
const ducktyper_1 = require("ducktyper");
exports.isRecurrence = (0, ducktyper_1.duckfaults)((0, ducktyper_1.makeDuck)((val) => {
    if (typeof val === 'string' || val instanceof String) {
        if (val.includes('RRULE:')) {
            val = val.replace('RRULE:', '').split(';');
            for (let i = 0; i < val.length; i++) {
                let pair = val[i].split('=');
                if (pair.length != 2) {
                    return false;
                }
                if (pair[1] === 'undefined') {
                    return false;
                }
            }
            return true;
        }
    }
    return false;
}), {
    message: 'Not a valid recurrence',
});
