import { DuckDto } from "ducktyper";
import { id } from "../../types/auth/id";
import { socialLinkState } from "../../types/social/socialLinkState";
export declare class UpdateLinkDto extends DuckDto {
    target: id;
    state: socialLinkState;
}
