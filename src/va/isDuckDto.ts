import {makeDuck, duckfaults, DuckDto} from "ducktyper";

//might need to split into two once for instance and one for contructor. Having these two merged together may cause an issue???
export const isDuckDto = duckfaults(makeDuck((val:DuckDto)=>{
    if (val instanceof Function) {
        try {
            val();
            return false;
        } catch (e) {
            try {
                if (e.message.includes("cannot be invoked without 'new'")) {
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