import {makeDuck, duckfaults} from "ducktyper";

export function useValidatorAsArr(validator, options) {
    return duckfaults(makeDuck([validator]), options);
}