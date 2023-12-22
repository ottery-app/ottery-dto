import {duckfaults, makeDuck} from "ducktyper";
import {RRule} from "rrule";

export const isRRule = duckfaults(makeDuck((rrule)=>{
    try {
        RRule.fromString(rrule);
        return true; // Valid RRule string
      } catch (error) {
        return false; // Invalid RRule string
      }
}, {
    message:"Not a valid rrule",
}))