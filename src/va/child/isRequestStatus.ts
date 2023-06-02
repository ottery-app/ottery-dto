import {duckfaults, makeDuck} from "ducktyper";
import { requestStatus } from "../../types/child/requestStatus.enum";
import { makeEnumVal } from "../makeEnumVal";

export const isRequestStatus = duckfaults(makeDuck(makeEnumVal(requestStatus)), {
    message: "Not a valid request status",
});