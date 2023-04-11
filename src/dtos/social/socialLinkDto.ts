import {duckorate, DuckDto} from "ducktyper";
import { id } from "../../types/auth/id";
import { isSocialLinkState } from "../../va/social/isSocialLinkState";
import { isUserLink } from "../../va/user/isUserLink";
import { SocialLinkHistoryDto } from "./socialLinkHistoryDto";


export class SocialLinkDto extends DuckDto {
    @duckorate(isUserLink, {
        message: "not a valid activator",
    })
    users: id[];

    @duckorate(isSocialLinkState, {
        message: "not a valid social state"
    })
    history: SocialLinkHistoryDto[];
}