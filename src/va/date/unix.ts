import {duckfaults, makeDuck, isNumber} from "ducktyper";

export const isUnixDate = duckfaults(makeDuck((val)=>{
    return isNumber(val) && val === Math.floor(val);
}), {
    message: "Not a valid date",
});