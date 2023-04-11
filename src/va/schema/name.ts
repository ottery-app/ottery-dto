import {duckfaults, makeDuck, isString} from "ducktyper";

const isUpperCase = makeDuck((str)=>{
    return str.charAt(0) === str.charAt(0).toUpperCase();
})

export const isSchemaName = duckfaults(makeDuck(isString, isUpperCase), {
    message: "Not a valid schema name must be string and capitalized",
});