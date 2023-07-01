import {duckorate, DuckDto, makeDuck} from "ducktyper";
import { id } from "../../types/auth/id";
import { isId } from "../../va/auth/auth";

export class IdDto extends DuckDto {
    @duckorate(isId)
    id:id;
}

export class IdArrayDto extends DuckDto {
    @duckorate(makeDuck([isId]))
    ids:id[]
}