import {DuckDto, duckorate, isString} from "ducktyper";
import { isId } from "../../va/auth/auth";
import { id } from "../../types/auth/id";
import { isSchemaName } from "../../va/schema/name";

export class MultiSchemeDto extends DuckDto {
    @duckorate(isId, {
        message: "Not a valid owner id",
    })
    id: id;

    @duckorate(isSchemaName, {
        message: "Not a valid schema name",
    })
    ref: string;
}