import {duckorate, DuckDto} from "ducktyper";
import { email } from "../../types/contact/email";
import { isEmail } from "../../va/contact/email";

export class EmailDto extends DuckDto {
    @duckorate(isEmail)
    email:email;
}