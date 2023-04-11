import {duckorate, DuckDto, dtoToIsDuck} from "ducktyper";
import { UserInfoDto } from "../user/info";
import { SocialLinkHistoryDto } from "./socialLinkHistoryDto";

export class UserSocialStatusDto extends DuckDto {
    @duckorate(dtoToIsDuck(UserInfoDto))
    user: UserInfoDto;
    
    @duckorate(dtoToIsDuck(SocialLinkHistoryDto))
    state: SocialLinkHistoryDto;
}