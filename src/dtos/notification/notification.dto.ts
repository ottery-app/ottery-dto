import {duckorate, DuckDto, isString, dtoToIsDuck} from "ducktyper";
import { notification } from "../../types/notification/notification.enum";
import { time } from "../../types/time/time";
import { isDate } from "../../va/date/date";
import { isNotificationType } from "../../va/notification/isNotificationType";
import { MultiSchemeDto } from "../perms/multischeme";

export class NotificationDto extends DuckDto {
    @duckorate(dtoToIsDuck(MultiSchemeDto), {
        message: "not a valid sender",
    })
    sender:MultiSchemeDto;

    @duckorate(isNotificationType)
    type: notification;

    @duckorate(isString, {
        message: "message must be a string",
    })
    message: string;

    @duckorate(isDate)
    time: time;
}