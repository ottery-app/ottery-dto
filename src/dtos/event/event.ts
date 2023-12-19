import {duckorate, isString, isBoolean, makeDuck, DuckDto, dtoToIsDuck} from "ducktyper";
import { id } from "../../types/auth/id";
import { currency } from "../../types/currency/currency";
import { location } from "../../types/geo/location";
import { recurrence } from "../../types/time/recurrence";
import { time } from "../../types/time/time";
import { isId } from "../../va/auth/auth";
import { isDate } from "../../va/date/date";
import { isRecurrence } from "../../va/date/ical";
import { isAddress } from "../../va/geo/address";
import { isCost } from "../../va/money/money";
import { FormFieldDto } from "../form/formField";

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

    @duckorate(isDate, {
        message: "Not a valid start date"
    })
    start: time;

    @duckorate(isDate, {
        message: "Not a valid end date"
    })
    end: time;

    @duckorate(isAddress, {
        message: "Not a valid location",
    })
    location: location;

    @duckorate(makeDuck([isRecurrence]), {
        message: "Not a valid recurrence",
        allowEmpty: false,
    })
    recurrence: recurrence[];

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

    @duckorate(isDate, {
        message: "Not a valid start date"
    })
    start: time;

    @duckorate(isDate, {
        message: "Not a valid end date"
    })
    end: time;

    @duckorate(isAddress, {
        message: "Not a valid location",
    })
    location: location;

    @duckorate(makeDuck([isRecurrence]), {
        message: "Not a valid recurrence",
        allowEmpty: false,
    })
    recurrence: recurrence[];

    @duckorate(isCost)
    cost: currency;


    @duckorate(makeDuck([dtoToIsDuck(FormFieldDto)]))
    volenteerSignUp: FormFieldDto[];

    @duckorate(makeDuck([dtoToIsDuck(FormFieldDto)]))
    attendeeSignUp: FormFieldDto[];

    @duckorate(isBoolean, {
        message: "Publicity must be marked",
    })
    public: boolean;
}