import {makeDuck, duckfaults} from "ducktyper";

export const isUrl = duckfaults(makeDuck(String), {
    message: "Not a valid url"
});