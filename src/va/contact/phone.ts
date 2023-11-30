import {makeDuck, duckfaults} from "ducktyper";

const reg = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$|^$/;
export const isPhone = duckfaults(makeDuck((val)=>reg.test(val)), {
    message: "Not a valid phone number",
});