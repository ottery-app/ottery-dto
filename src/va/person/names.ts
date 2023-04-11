import {makeDuck, duckfaults, isString} from "ducktyper";

export const isName = duckfaults(makeDuck(val=>/^([^0-9]*)$/.test(val) && val !== "" && isString(val)),{
    message:"Not a valid name",
});

export const isFirstName = duckfaults(isName, {
    message: "Not a valid first name",
});

export const isMiddleName = duckfaults(isName, {
    message: "Not a valid middle name",
});

export const isLastName = duckfaults(isName, {
    message: "Not a valid last name",
});