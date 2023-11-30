import {duckorate, isString, DuckDto, Any, makeDuck} from "ducktyper";
import { id } from "../../types/auth/id";
import { inputType } from "../../types/input/input.enums";
import { isId } from "../../va/auth/auth";

//TODO add typing and specify the validators to something more specific then string
export class DataFieldDto extends DuckDto {
    @duckorate(isId)
    formField: id;

    @duckorate(isString, {
        allowEmpty: false,
        message: 'Not a valid field label',
    })
    label: string;

    @duckorate(isString, {
        allowEmpty: false,
        message: 'Not a valid field type',
    })
    type: inputType;

    @duckorate(makeDuck(Any), {
        allowEmpty: false,
        message: 'invalid value',
    })
    value: any;
}