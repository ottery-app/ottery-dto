import {duckorate, isString, isBoolean, makeDuck, DuckDto, dtoToIsDuck} from "ducktyper";
import { id } from "../../types/auth/id";
import { currency } from "../../types/currency/currency";
import { location } from "../../types/geo/location";
import { recurrence } from "../../types/time/recurrence";
import { time } from "../../types/time/time";
import { isId } from "../../va/auth/auth";
import { isAddress } from "../../va/geo/address";
import { isCost } from "../../va/money/money";
import { FormFieldDto } from "../form/formField";
import { isRRule } from "../../va/date/ical";
import { isUnixDate } from "../../va/date/unix";

export class EventDto extends DuckDto {
    @duckorate(isString, {
        message: "Not a valid summary",
        allowEmpty: false,
    })
    summary: string;

    @duckorate(isId, {
        message: "Not a valid orginization",
        allowEmpty: false,
    })
    org: id;

    @duckorate(isString, {
        message: "Not a valid description",
        allowEmpty: false,
    })
    description: string;

    @duckorate(isRRule)
    rrule: recurrence;

    @duckorate(isUnixDate, {
        message:"Not a valid start",
    })
    start: time;

    @duckorate(isUnixDate, {
        message:"Not a valid durration",
    })
    durration: time;

    @duckorate(isAddress, {
        message: "Not a valid location",
    })
    location: location;

    @duckorate(makeDuck([isId]), {
        message: "Issue in attendee list",
        allowEmptyArray: true,
    })
    attendees: id[];
    
    @duckorate(isId, {
        message: "Issue in leadManager",
    })
    leadManager: id;

    @duckorate(makeDuck([isId]), {
        message: "Issue in manager list",
        allowEmptyArray: true,
    })
    managers: id[];

    @duckorate(makeDuck([isId]), {
        message: "Issue in volenteer list",
        allowEmptyArray: true,
    })
    volenteers: id[];

    @duckorate(makeDuck([isId]), {
        message: "Issue in the volenteer signup form",
        allowEmptyArray: true,
    })
    volenteerSignUp: id[];

    @duckorate(makeDuck([isId]), {
        message: "Issue in the attendee signup form",
        allowEmptyArray: true,
    })
    attendeeSignUp: id[];

    @duckorate(makeDuck([isId]), {
        message: "Issue in the guardian signup form",
        allowEmptyArray: true,
    })
    guardianSignUp: id[];

    @duckorate(isCost)
    cost: currency;

    @duckorate(isBoolean, {
        message: "Publicity must be marked",
    })
    public: boolean;
}

export class CreateEventDto extends DuckDto {
    @duckorate(isString, {
        message: "Not a valid summary",
        allowEmpty: false,
    })
    summary: string;

    @duckorate(isId, {
        message: "Not a valid orginization",
        allowEmpty: false,
    })
    org: id;

    @duckorate(isString, {
        message: "Not a valid description",
        allowEmpty: false,
    })
    description: string;

    @duckorate(isRRule)
    rrule: recurrence;

    @duckorate(isUnixDate, {
        message:"Not a valid start",
    })
    start: time;

    @duckorate(isUnixDate, {
        message:"Not a valid durration",
    })
    durration: time;

    @duckorate(isAddress, {
        message: "Not a valid location",
    })
    location: location;

    @duckorate(isCost)
    cost: currency;

    @duckorate(makeDuck([dtoToIsDuck(FormFieldDto)]))
    volenteerSignUp: FormFieldDto[];

    @duckorate(makeDuck([dtoToIsDuck(FormFieldDto)]))
    attendeeSignUp: FormFieldDto[];

    @duckorate(makeDuck([dtoToIsDuck(FormFieldDto)]))
    guardianSignUp: FormFieldDto[];

    @duckorate(isBoolean, {
        message: "Publicity must be marked",
    })
    public: boolean;
}