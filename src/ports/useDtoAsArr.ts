import {makeDuck, duckfaults} from "ducktyper";
import { isDuckDto } from "../va/isDuckDto";

export function useDtoAsArr(dto, options) {
    isDuckDto(dto, {
        throw:true, 
        message:"must use a dto for useDtoAsArr"
    });
    
    return duckfaults(makeDuck([dto]), options);
}