import {makeDuck, duckfaults} from "ducktyper";

export const isFileType = duckfaults(makeDuck(String), {
    allowEmpty: false,
    message: "Not a valid file type",
})