import {duckorate, DuckDto, isString} from "ducktyper";
import { isId } from "../../va/auth/auth";
import { id } from "../../types/auth/id";
import { isDate } from "../../va/date/date";
import { time } from "../../types/time/time";

export class MessageDto extends DuckDto {
    @duckorate(isId, {
        message: "Not a valid sender id",
    })
    sender: id;
    
    @duckorate(isString, {
        message: "Not a valid message",
    })
    message: string;

    @duckorate(isDate, {
        message: "Not a valid date",
    })
    date: time;

    constructor(senderId, message) {
        super();
        this.date = new Date().getTime();
        this.message = message;
        this.sender = senderId;
    }
}