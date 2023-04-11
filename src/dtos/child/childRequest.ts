import { id } from "../../types/auth/id";
import {duckorate, DuckDto} from 'ducktyper';
import { isId } from "../../va/auth/auth";
import { isRequestStatus } from "../../va/child/isRequestStatus";
import { isRequestType } from "../../va/child/isRequestType";
import { requestType } from "../../types/child/requestType.enum";
import { requestStatus } from "../../types/child/requestStatus.enum";

export class ChildRequestDto extends DuckDto {
    @duckorate(isId, {
        message: "Not a valid guardian"
    })
    guardian: id;

    @duckorate(isId, {
        message: "Not a valid event"
    })
    event: id;

    @duckorate(isId, {
        message: "Not a valid child"
    })
    child: id;

    @duckorate(isRequestStatus, {
        message: "Not a valid child",
        allowUndefined: true,
    })
    status?: requestStatus;

    @duckorate(isRequestType, {
        message: "Not a vale request type",
        allowUndefined: true,
    })
    type?: requestType;
}