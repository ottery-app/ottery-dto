import {duckfaults, makeDuck} from "ducktyper";
import { requestType } from "../../types/child/requestType.enum";

export const isRequestType = duckfaults(makeDuck((val)=>{
    return val === requestType.DROPOFF ||
           val === requestType.PICKUP;
}), {
    message: "Not a valid request type",
});