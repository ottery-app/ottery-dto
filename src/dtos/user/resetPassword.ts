import { duckorate, DuckDto } from "ducktyper";
import { isEmail } from "../../va/contact/email";
import { email } from "../../types/contact/email";
import { isPassword } from "../../va/auth/auth";
import { password } from "../../types/auth/password";
import { token } from "../../types/auth/token";

export class ResetPasswordDto extends DuckDto {
  @duckorate(isEmail)
  email: email;

  @duckorate(isPassword)
  password: password;

  token: token;
}
