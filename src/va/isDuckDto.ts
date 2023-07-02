import {makeDuck, duckfaults, DuckDto} from "ducktyper";

export const isDuckDto = duckfaults(makeDuck((val:DuckDto)=>{
    if (val instanceof Function) {
        try {
            val()
            return false;
        } catch (e) {
            try {
                if (e.message === "Class constructor a cannot be invoked without 'new'") {
                    return new val() instanceof DuckDto;
                }
            } catch (e) {
                return false;
            }
        }
    }

    return val instanceof DuckDto;
}), {
    message: "Not an instanceof DuckDto"
});