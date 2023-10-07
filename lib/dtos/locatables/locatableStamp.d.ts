import { DuckDto } from "ducktyper";
import { id } from "../../types/auth/id";
import { time } from "../../types/time/time";
export declare class LocatableStampDto extends DuckDto {
    with: id;
    at: id;
    time: time;
}
