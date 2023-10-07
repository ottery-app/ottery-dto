import { activationCode } from "../../types/auth/activationCode";
import { password } from "../../types/auth/password";
import { role } from "../../types/auth/roles";
import { email } from "../../types/contact/email";
import { name } from "../../types/user/name";
import { DuckDto } from "ducktyper";
import { ImageDto } from "../files/image";
import { id } from "../../types/auth/id";
export declare class UserDto extends DuckDto {
    _id: id;
    email: email;
    password: password;
    firstName: name;
    lastName: name;
    activated: boolean;
    activationCode: activationCode;
    roles: role[];
    pfp: ImageDto;
}
