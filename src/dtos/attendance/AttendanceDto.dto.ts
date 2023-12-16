import {duckorate, DuckDto, makeDuck, isString, dtoToIsDuck} from "ducktyper";
import { name } from "../../types/user/name";
import { id } from "../../types/auth/id";
import { isId } from "../../va/auth/auth";
import { AttendanceEntryDto } from "./AttendanceEntry.dto";

export class AttendanceDto extends DuckDto {
    _id;

    @duckorate(isId, {
        message: "Not a valid event id"
    })
    event:id;

    @duckorate(isId, {
        message: "Not a valid attendee id"
    })
    attendee:id;

    @duckorate(makeDuck([dtoToIsDuck(AttendanceEntryDto)]))
    entries: AttendanceEntryDto[];
}