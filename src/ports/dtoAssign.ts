import {DuckDto} from "ducktyper";
import { classifyDto } from "./classifyDto";

export function dtoAssign(Dto: DuckDto, object: object) {
    // if (!(Dto instanceof Function)) {
    //     throw new Error("dto must be an instance of DuckDto");
    // }

    // if (!(object instanceof Object)) {
    //     throw new Error('object must be an object');
    // }

    const dto = Object.assign(new Dto(), object);
    classifyDto(dto, {throw:true})
    return dto;
}