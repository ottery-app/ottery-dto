import { DuckDto } from "ducktyper";
import { UserInfoDto } from "../user/info";
import { SocialLinkHistoryDto } from "./socialLinkHistoryDto";
export declare class UserSocialStatusDto extends DuckDto {
    user: UserInfoDto;
    state: SocialLinkHistoryDto;
}
