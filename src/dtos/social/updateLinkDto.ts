import {duckorate, DuckDto} from "ducktyper";
import { isId } from "../../va/auth/auth";
import { id } from "../../types/auth/id";
import { socialLinkState } from "../../types/social/socialLinkState";
import { isSocialLinkState } from "../../va/social/isSocialLinkState";

export class UpdateLinkDto extends DuckDto {
    @duckorate(isId, {
        message: "not a valid target id",
    })
    target: id;

    @duckorate(isSocialLinkState, {
        message: "not a valid social state"
    })
    state: socialLinkState;
}