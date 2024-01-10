import { name } from "../../types/user/name";
import {duckorate, isString, DuckDto, dtoToIsDuck} from "ducktyper";
import { UserDto } from "./user";
import { ImageDto } from "../files/image";
import { id } from "../../types/auth/id";
import { isId } from "../../va/auth/auth";
import { email } from "../../types/contact/email";
import { isEmail } from "../../va/contact/email";

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

    @duckorate(isEmail, {
        message: "Not a valid email",
        allowEmpty: false,
    })
    email: email;

    constructor(partial: Partial<UserDto>) {
        super()
        this._id = partial._id!;
        this.firstName = partial.firstName!;
        this.lastName = partial.lastName!;
        this.pfp = partial.pfp!;
        this.email = partial.email!;
    }
}
