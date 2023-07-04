import {makeDuck, duckfaults} from "ducktyper";

export function validateAsArr(validator, options={}) {
    validator = makeDuck([validator]);

    if (options) {
        validator = duckfaults(validator, options);
    }

    return validator;
}