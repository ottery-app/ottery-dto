import {duckfaults, makeDuck} from "ducktyper";
import { requestStatus } from "../../types/child/requestStatus.enum";

export const isRequestStatus = duckfaults(makeDuck((val)=>{
    return val === requestStatus.ACCEPTED ||
           val === requestStatus.INPROGRESS ||
           val === requestStatus.NONE ||
           val === requestStatus.REJECTED;
}), {
    message: "Not a valid request status",
});