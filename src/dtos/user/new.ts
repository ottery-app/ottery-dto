import {duckorate, DuckDto} from "ducktyper";
import { isEmail } from "../../va/contact/email";
import { isFirstName, isLastName } from "../../va/person/names";
import { isPassword } from "../../va/auth/auth";
import { email } from "../../types/contact/email";
import { password } from "../../types/auth/password";
import { name } from "../../types/user/name";
// import { ImageDto } from "../files/image";

export class NewUserDto extends DuckDto {
    // @duckorate(dtoToIsDuck(ImageDto), {
    //     message: "Not a valid Image",
    //     allowUndefined: false,
    // })
    // pfp:ImageDto;

    @duckorate(isEmail)
    email:email;

    @duckorate(isPassword)
    password:password;

    @duckorate(isFirstName)
    firstName:name;

    @duckorate(isLastName)
    lastName:name;
}