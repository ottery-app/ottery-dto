import {makeDuck, duckfaults} from "ducktyper";
import { isId } from "../auth/auth";

export const isUserLink = duckfaults(makeDuck([isId, isId]), {
    message: "not a valid user link",
});