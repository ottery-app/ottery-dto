import {duckorate, DuckDto, dtoToIsDuck} from "ducktyper";
import { isId } from "../../va/auth/auth";
import { id } from "../../types/auth/id";



export class AcceptGuardianshipDto extends DuckDto {
    @duckorate(isId, {
        message: "Not a valid child id"
    })
    childId: id;

    @duckorate(isId, {
        message: "Not a valid token"
    })
    token: id
}