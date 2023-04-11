import { activationCode } from "../../types/auth/activationCode";
import { password } from "../../types/auth/password";
import { role } from "../../types/auth/roles";
import { email } from "../../types/contact/email";
import { name } from "../../types/user/name";
import {DuckDto} from "ducktyper";
import { ImageDto } from "../files/image";
import { id } from "../../types/auth/id";

export class UserDto extends DuckDto {
    _id: id; //this isnt really needed but its needed to allow info.ts to work right
    email: email;
    password: password;
    firstName: name;
    lastName: name;
    activated: boolean;
    activationCode: activationCode;
    roles: role[];
    pfp: ImageDto;
}