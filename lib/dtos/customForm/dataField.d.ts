import { DuckDto } from "ducktyper";
import { id } from "../../types/auth/id";
import { inputType } from "../../types/input/input.enums";
export declare class DataFieldDto extends DuckDto {
    formField: id;
    label: string;
    type: inputType;
    value: any;
}
