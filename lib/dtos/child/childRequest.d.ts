import { id } from "../../types/auth/id";
import { DuckDto } from 'ducktyper';
import { requestType } from "../../types/child/requestType.enum";
import { requestStatus } from "../../types/child/requestStatus.enum";
export declare class ChildRequestDto extends DuckDto {
    guardian: id;
    event: id;
    child: id;
    status?: requestStatus;
    type?: requestType;
}
