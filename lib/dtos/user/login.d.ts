import { DuckDto } from "ducktyper";
import { email } from "../../types/contact/email";
import { password } from "../../types/auth/password";
export declare class LoginDto extends DuckDto {
    email: email;
    password: password;
}
