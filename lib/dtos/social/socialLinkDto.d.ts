import { DuckDto } from "ducktyper";
import { id } from "../../types/auth/id";
import { SocialLinkHistoryDto } from "./socialLinkHistoryDto";
export declare class SocialLinkDto extends DuckDto {
    users: id[];
    history: SocialLinkHistoryDto[];
}
