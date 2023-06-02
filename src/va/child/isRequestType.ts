import {duckfaults, makeDuck} from "ducktyper";
import { requestType } from "../../types/child/requestType.enum";
import { makeEnumVal } from "../makeEnumVal";

export const isRequestType = duckfaults(makeDuck(makeEnumVal(requestType)), {
    message: "Not a valid request type",
});