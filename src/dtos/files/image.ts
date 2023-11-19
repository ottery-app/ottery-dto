import { FileDto } from "./file";
import {duckorate, isNumber} from "ducktyper";

export class ImageDto extends FileDto {
    @duckorate(isNumber, {
        message: "Not a valid aspect ratio"
    })
    aspectRatio: number;
}