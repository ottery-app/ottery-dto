import {DuckDto, duckorate, dtoToIsDuck} from "ducktyper";
import { isId } from "../../va/auth/auth";
import {id} from "../../types/auth/id";
import { MultiSchemeDto } from "./multischeme";

export class PermLinkDto extends DuckDto {
    @duckorate(dtoToIsDuck(MultiSchemeDto), {
        message: "Not a valid owner",
    })
    owner: MultiSchemeDto;

    @duckorate(isId, {
        message: "Not a valid perm id",
    })
    perms: id;
}

export function makePermLinkDto(obj:{owner:MultiSchemeDto, perms:id}){
    const link = new PermLinkDto();
    link.owner = obj.owner;
    link.perms = obj.perms;
    return link;
}