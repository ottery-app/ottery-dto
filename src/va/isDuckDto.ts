import {makeDuck, duckfaults, DuckDto} from "ducktyper";

export const isDuckDto = duckfaults(makeDuck((val:DuckDto)=>{
    return val instanceof DuckDto;
}), {
    message: "Not an instanceof DuckDto"
});