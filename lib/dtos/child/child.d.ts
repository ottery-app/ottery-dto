import { DuckDto } from "ducktyper";
import { name } from "../../types/user/name";
import { time } from "../../types/time/time";
import { gender } from "../../types/gender/gender";
import { image } from "../../types/file/image";
export declare class CreateChildDto extends DuckDto {
    pfp: image;
    firstName: name;
    middleName: name;
    lastName: name;
    dateOfBirth: time;
    gender: gender;
}
