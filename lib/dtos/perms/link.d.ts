import { DuckDto } from "ducktyper";
import { id } from "../../types/auth/id";
import { MultiSchemeDto } from "./multischeme";
export declare class PermLinkDto extends DuckDto {
    owner: MultiSchemeDto;
    perms: id;
}
export declare function makePermLinkDto(obj: {
    owner: MultiSchemeDto;
    perms: id;
}): PermLinkDto;
