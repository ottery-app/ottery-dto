import {classifyDuck} from "ducktyper";

export function classifyDto(dto: any, options?) {
    return classifyDuck(dto, options);
}