import {duckorate, DuckDto, isString} from "ducktyper";

export class IdDto extends DuckDto {
    @duckorate(isString)
    id:string;
}