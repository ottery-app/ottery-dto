import {duckorate, DuckDto, makeDuck, isString, dtoToIsDuck} from "ducktyper";
import { name } from "../../types/user/name";
import { id } from "../../types/auth/id";
import { isId } from "../../va/auth/auth";
import { MessageDto } from "./messageDto";

export class ChatDto extends DuckDto {
    _id;

    @duckorate(isString, {
        message: "Not a valid name"
    })
    name:name='unnamed';

    @duckorate(makeDuck([isId]), {
        message: "Users must be a list of user ids",
        allowUndefined:false,
    })
    users:id[];

    @duckorate(makeDuck([dtoToIsDuck(MessageDto)]))
    messages: MessageDto[];
}