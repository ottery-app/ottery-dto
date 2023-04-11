import {makeDuck, duckfaults} from "ducktyper";

const reg_email = /^[\w-.]+@([\w-]+.)+[\w-]{2,4}$/ //??? might be an issue in this regex
export const isEmail = duckfaults(makeDuck((val)=>reg_email.test(val)), {
    message: "Not a valid email",
});