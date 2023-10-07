import { DuckDto } from "ducktyper";
import { id } from "../../types/auth/id";
import { perm } from "../../types/auth/perms";
import { MultiSchemeDto } from "./multischeme";
export declare class PermsDto extends DuckDto {
    _id: id;
    owner: MultiSchemeDto;
    ownee: MultiSchemeDto;
    permissions: perm[];
}
