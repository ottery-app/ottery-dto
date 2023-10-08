import {makeDuck, duckfaults, DuckDto} from "ducktyper";

//might need to split into two once for instance and one for contructor. Having these two merged together may cause an issue???
export const isDuckDto = duckfaults(makeDuck((val:DuckDto)=>{
    return val instanceof DuckDto;
}), {
    message: "Not an instanceof DuckDto"
});