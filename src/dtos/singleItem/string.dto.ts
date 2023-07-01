import {duckorate, DuckDto, isString} from "ducktyper";

export class StringDto extends DuckDto {
    @duckorate(isString)
    string:string;
}