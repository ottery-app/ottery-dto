import { DuckDto } from "ducktyper";
import { id } from "../../types/auth/id";
import { time } from "../../types/time/time";
export declare class MessageDto extends DuckDto {
    sender: id;
    message: string;
    date: time;
    constructor(senderId: any, message: any);
}
