import {duckorate, DuckDto} from "ducktyper";
import { isEmail } from "../../va/contact/email";
import { isFirstName, isLastName } from "../../va/person/names";
import { isPassword } from "../../va/auth/auth";
import { email } from "../../types/contact/email";
import { password } from "../../types/auth/password";
import { name } from "../../types/user/name";

export class NewUserDto extends DuckDto {

    @duckorate(isEmail)
    email:email;

    @duckorate(isPassword)
    password:password;

    @duckorate(isFirstName)
    firstName:name;

    @duckorate(isLastName)
    lastName:name;
}