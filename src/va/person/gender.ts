import { makeDuck, duckfaults } from "ducktyper";
import { gender } from "../../types/gender/gender";

export const isFemale = duckfaults(makeDuck((val)=>{
    return val === gender.FEMALE;
}), {
    message: "Not a female",
});

export const isMale = duckfaults(makeDuck((val)=>{
    return val === gender.MALE;
}), {
    message: "Not a male",
});

export const isGender = duckfaults(makeDuck((val)=>{
    return isMale(val) || isFemale(val);
}), {
    message: "Not a valid gender",
});
