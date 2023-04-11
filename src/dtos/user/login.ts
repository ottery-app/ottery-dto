import {duckorate, DuckDto} from "ducktyper";
import { isEmail } from "../../va/contact/email";
import { isPassword } from "../../va/auth/auth";
import { email } from "../../types/contact/email";
import { password } from "../../types/auth/password";

export class LoginDto extends DuckDto {
    @duckorate(isEmail)
    email:email;
    @duckorate(isPassword)
    password:password;
}