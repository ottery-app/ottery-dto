import {duckorate, isString, isNumber, DuckDto} from "ducktyper";
import { time } from "../../types/time/time";
import { isDate } from "../../va/date/date";
import { isFileType } from "../../va/files/isFileType";

//TODO custom error msg
//TODO add size type for file type
export class FileDto extends DuckDto {
    // @duckorate(isDate, {
    //     message:"Not a valid last modified date"
    // })
    // lastModified: time;

    // @duckorate(isString, {
    //     message: "Not a valid file name",
    // })
    // name: string;

    // @duckorate(isNumber, {
    //     message: "Not a valid file size",
    // })
    // size: number;

    @duckorate(isString, {
        message: "Not a valid src"
    })
    src: string;

    // @duckorate(isFileType)
    // type: string;
}