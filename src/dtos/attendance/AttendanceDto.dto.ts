import {duckorate, DuckDto, makeDuck, dtoToIsDuck} from "ducktyper";
import { id } from "../../types/auth/id";
import { isId } from "../../va/auth/auth";
import { isDate } from "../../va/date/date";
import { attendanceType } from "../../types/attendance/attendance.types";
import { isAttendanceType } from "../../va/attendance/isAttendanceType";

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

    @duckorate(isDate)
    date: number;

    @duckorate(isAttendanceType)
    status: attendanceType;
}