import {makeDuck, duckfaults} from "ducktyper";

export function validateAsArr(validator, options) {
    return duckfaults(makeDuck([validator]), options);
}