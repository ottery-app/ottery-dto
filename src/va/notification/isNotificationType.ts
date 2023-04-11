import {makeDuck, duckfaults} from "ducktyper";
import { notification } from "../../types/notification/notification.enum";
import { makeEnumVal } from "../makeEnumVal";

export const isNotificationType = duckfaults(makeDuck(makeEnumVal(notification)), {
    message: "not a valid notification type",
})