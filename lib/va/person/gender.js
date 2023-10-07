"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isGender = exports.isMale = exports.isFemale = void 0;
const ducktyper_1 = require("ducktyper");
const gender_1 = require("../../types/gender/gender");
exports.isFemale = (0, ducktyper_1.duckfaults)((0, ducktyper_1.makeDuck)((val) => {
    return val === gender_1.gender.FEMALE;
}), {
    message: "Not a female",
});
exports.isMale = (0, ducktyper_1.duckfaults)((0, ducktyper_1.makeDuck)((val) => {
    return val === gender_1.gender.MALE;
}), {
    message: "Not a male",
});
exports.isGender = (0, ducktyper_1.duckfaults)((0, ducktyper_1.makeDuck)((val) => {
    return (0, exports.isMale)(val) || (0, exports.isFemale)(val);
}), {
    message: "Not a valid gender",
});
