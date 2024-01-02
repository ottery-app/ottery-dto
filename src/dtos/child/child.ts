import {duckorate, dtoToIsDuck, DuckDto} from "ducktyper";
import { isFirstName, isLastName, isMiddleName } from "../../va/person/names";
import { isGender } from "../../va/person/gender";
import { ImageDto } from "../files/image";
import { name } from "../../types/user/name";
import { time } from "../../types/time/time";
import { gender } from "../../types/gender/gender";
import { isDate } from "../../va/date/date";

export class CreateChildDto extends DuckDto {
    @duckorate(dtoToIsDuck(ImageDto), {
        message: "Not a valid Image",
        allowUndefined:false,
    })
    pfp:ImageDto;
    @duckorate(isFirstName)
    firstName:name;
    @duckorate(isLastName)
    lastName:name;
    @duckorate(isDate, {
        message: "Not a valid birth date",
    })
    dateOfBirth:time;
    @duckorate(isGender)
    gender:gender;
}