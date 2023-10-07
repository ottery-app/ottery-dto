import { name } from "../../types/user/name";
import { DuckDto } from "ducktyper";
import { UserDto } from "./user";
import { ImageDto } from "../files/image";
import { id } from "../../types/auth/id";
export declare class UserInfoDto extends DuckDto {
    _id: id;
    pfp: ImageDto;
    firstName: name;
    lastName: name;
    constructor(partial: Partial<UserDto>);
}
