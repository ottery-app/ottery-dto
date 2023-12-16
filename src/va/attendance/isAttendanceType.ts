import { attendanceType } from "../../types/attendance/attendance.types";
import { makeEnumVal } from "../makeEnumVal";
import {duckfaults, makeDuck} from "ducktyper";

export const isAttendanceType = duckfaults(makeDuck(makeEnumVal(attendanceType)), {
    message: "Not a valid attendance status"
})