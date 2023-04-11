import {DuckDto, duckorate} from "ducktyper";
import { id } from "../../types/auth/id";
import { time } from "../../types/time/time";
import { isId } from "../../va/auth/auth";
import { isDate } from "../../va/date/date";

export class LocatableStampDto extends DuckDto {
    @duckorate(isId)
    with: id; //user
    @duckorate(isId)
    at: id //event
    @duckorate(isDate)
    time: time //unix
}