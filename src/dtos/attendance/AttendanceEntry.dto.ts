import {duckorate, DuckDto} from "ducktyper";
import { isDate } from "../../va/date/date";
import { attendanceType } from "../../types/attendance/attendance.types";
import { isAttendanceType } from "../../va/attendance/isAttendanceType";

export class AttendanceEntryDto extends DuckDto {
    _id;

    @duckorate(isDate)
    date:number;

    @duckorate(isAttendanceType)
    status:attendanceType;
}