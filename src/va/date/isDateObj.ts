import { duckfaults, makeDuck } from "ducktyper";

export const isDateObj = duckfaults(makeDuck((val)=>{
    if ( Object.prototype.toString.call(val) === "[object Date]" ) {
        if ( !isNaN(val.getTime()) ) {
            return true;
        } else {
           return false;
        }
     } else {
        return isDateObj(new Date(val));
     }
}), {
    message: "Not a valid date",
});