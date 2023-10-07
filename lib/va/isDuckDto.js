"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isDuckDto = void 0;
const ducktyper_1 = require("ducktyper");
//might need to split into two once for instance and one for contructor. Having these two merged together may cause an issue???
exports.isDuckDto = (0, ducktyper_1.duckfaults)((0, ducktyper_1.makeDuck)((val) => {
    if (val instanceof Function) {
        try {
            val();
            return false;
        }
        catch (e) {
            try {
                if (e.message.includes("cannot be invoked without 'new'")) {
                    return new val() instanceof ducktyper_1.DuckDto;
                }
            }
            catch (e) {
                return false;
            }
        }
    }
    return val instanceof ducktyper_1.DuckDto;
}), {
    message: "Not an instanceof DuckDto"
});
