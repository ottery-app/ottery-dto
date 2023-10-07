"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isDateObj = void 0;
const ducktyper_1 = require("ducktyper");
exports.isDateObj = (0, ducktyper_1.duckfaults)((0, ducktyper_1.makeDuck)((val) => {
    if (Object.prototype.toString.call(val) === "[object Date]") {
        if (!isNaN(val.getTime())) {
            return true;
        }
        else {
            return false;
        }
    }
    else {
        return (0, exports.isDateObj)(new Date(val));
    }
}), {
    message: "Not a valid date",
});
