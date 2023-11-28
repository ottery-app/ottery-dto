import {duckorate, isString, isBoolean, DuckDto} from "ducktyper";
import { inputType } from "../../types/input/input.enums";

//TODO add typing and specify the validators to something more specific then string
export class CustomFormFieldDto extends DuckDto {
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

    @duckorate(isString, {
        allowEmpty: false,
        message: 'Not a valid note for what the field is for',
    })
    note: string;

    @duckorate(isBoolean, {
        messsage: "must be marked as permanent",
    })
    permanent: boolean

    @duckorate(isBoolean, {
        message: "Optinality must be set",
    })
    optional: boolean;
}