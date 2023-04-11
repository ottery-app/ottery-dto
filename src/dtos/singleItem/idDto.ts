import {duckorate, DuckDto} from "ducktyper";
import { id } from "../../types/auth/id";
import { isId } from "../../va/auth/auth";

export class IdDto extends DuckDto {
    @duckorate(isId)
    id:id;
}