import {duckorate, DuckDto} from "ducktyper";
import { isId } from "../../va/auth/auth";
import { id } from "../../types/auth/id";
import { socialLinkState } from "../../types/social/socialLinkState";
import { isSocialLinkState } from "../../va/social/isSocialLinkState";
import { isDate } from "../../va/date/date";
import { time } from "../../types/time/time";


export class SocialLinkHistoryDto extends DuckDto {
    @duckorate(isId, {
        message: "not a valid activator",
    })
    activator: id;

    @duckorate(isSocialLinkState, {
        message: "not a valid social state"
    })
    state: socialLinkState;

    @duckorate(isDate)
    timestamp:time
}