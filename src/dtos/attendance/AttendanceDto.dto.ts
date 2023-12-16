import {duckorate, DuckDto, makeDuck, dtoToIsDuck} from "ducktyper";
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
        message: "Not a valid child id"
    })
    child:id;

    @duckorate(makeDuck([dtoToIsDuck(AttendanceEntryDto)]))
    entries: AttendanceEntryDto[];
}