import { DuckDto } from "ducktyper";
import { notification } from "../../types/notification/notification.enum";
import { time } from "../../types/time/time";
import { MultiSchemeDto } from "../perms/multischeme";
export declare class NotificationDto extends DuckDto {
    sender: MultiSchemeDto;
    type: notification;
    message: string;
    read: boolean;
    time: time;
}
