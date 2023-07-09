import {duckorate, DuckDto, makeDuck, isString} from "ducktyper";
import { name } from "../../types/user/name";
import { id } from "../../types/auth/id";
import { isId } from "../../va/auth/auth";

export class MakeChatDto extends DuckDto {
    @duckorate(isString, {
        message: "Not a valid name"
    })
    name:name='unnamed';

    @duckorate(makeDuck([isId]), {
        message: "Users must be a list of user ids",
        allowUndefined:false,
    })
    users:id[];
}