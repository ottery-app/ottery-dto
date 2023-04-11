import {duckorate, DuckDto} from "ducktyper";
import { activationCode } from "../../types/auth/activationCode";
import { isActivationCode } from "../../va/auth/auth";

export class ActivationCodeDto extends DuckDto {
    @duckorate(isActivationCode)
    code:activationCode;
}