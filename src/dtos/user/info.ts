import { name } from "../../types/user/name";
import {duckorate, isString, DuckDto, dtoToIsDuck} from "ducktyper";
import { UserDto } from "./user";
import { ImageDto } from "../files/image";
import { id } from "../../types/auth/id";
import { isId } from "../../va/auth/auth";

export class UserInfoDto extends DuckDto {
    @duckorate(isId, {
        message: "Not a valid id",
        allowUndefined: false,
    })
    _id: id

    @duckorate(dtoToIsDuck(ImageDto), {
        message: "Not a valid Image",
        allowUndefined: false,
    })
    pfp:ImageDto;

    @duckorate(isString, {
        message: "Not a valid first name",
        allowEmpty: false,
    })
    firstName: name;
    
    @duckorate(isString, {
        message: "Not a valid last name",
        allowEmpty: false,
    })
    lastName: name;

    constructor(partial: Partial<UserDto>) {
        super()
        //I AM SORRY I dont want to lie to you. But alas this can be undefined and thats okay.
        this._id = partial._id!;
        this.firstName = partial.firstName!;
        this.lastName = partial.lastName!;
        this.pfp = partial.pfp!;
    }
}
