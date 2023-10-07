import { DuckDto } from "ducktyper";
import { name } from "../../types/user/name";
import { id } from "../../types/auth/id";
export declare class MakeChatDto extends DuckDto {
    name: name;
    users: id[];
}
