import { DuckDto } from "ducktyper";
import { email } from "../../types/contact/email";
import { password } from "../../types/auth/password";
import { name } from "../../types/user/name";
import { ImageDto } from "../files/image";
export declare class NewUserDto extends DuckDto {
    pfp: ImageDto;
    email: email;
    password: password;
    firstName: name;
    lastName: name;
}
