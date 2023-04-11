import {duckorate, DuckDto, dtoToIsDuck} from "ducktyper";
import { id } from "../../types/auth/id";
import { perm } from "../../types/auth/perms";
import { arePerms, isId } from "../../va/auth/auth";
import { MultiSchemeDto } from "./multischeme";

export class PermsDto extends DuckDto {
    @duckorate(isId, {
        message: "Not a valid id",
        allowUndefined: true,
    })
    _id: id;

    @duckorate(dtoToIsDuck(MultiSchemeDto), {
        message: "Not a valid owner",
    })
    owner: MultiSchemeDto;

    @duckorate(dtoToIsDuck(MultiSchemeDto), {
        message: "Not a valid ownee",
    })
    ownee: MultiSchemeDto;

    @duckorate(arePerms, {
        allowEmpty: true,
    })
    permissions: perm[];
}
