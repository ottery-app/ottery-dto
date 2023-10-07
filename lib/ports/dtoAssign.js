"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.dtoAssign = void 0;
const classifyDto_1 = require("./classifyDto");
function dtoAssign(Dto, object) {
    // if (!(Dto instanceof Function)) {
    //     throw new Error("dto must be an instance of DuckDto");
    // }
    // if (!(object instanceof Object)) {
    //     throw new Error('object must be an object');
    // }
    const dto = Object.assign(new Dto(), object);
    (0, classifyDto_1.classifyDto)(dto, { throw: true });
    return dto;
}
exports.dtoAssign = dtoAssign;
