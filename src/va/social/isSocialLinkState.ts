import {makeDuck, duckfaults} from "ducktyper";
import { socialLinkState } from "../../types/social/socialLinkState";
import { makeEnumVal } from "../makeEnumVal";

export const isSocialLinkState = duckfaults(makeDuck(makeEnumVal(socialLinkState)), {
    message: "not a valid social link state",
})