import { DuckDto } from "ducktyper";
import { id } from "../../types/auth/id";
import { socialLinkState } from "../../types/social/socialLinkState";
import { time } from "../../types/time/time";
export declare class SocialLinkHistoryDto extends DuckDto {
    activator: id;
    state: socialLinkState;
    timestamp: time;
}
