import { DuckDto } from "ducktyper";
import { id } from "../../types/auth/id";
import { currency } from "../../types/currency/currency";
import { location } from "../../types/geo/location";
import { recurrence } from "../../types/time/recurrence";
import { time } from "../../types/time/time";
import { CustomFormFieldDto } from "../customForm/customFormField";
export declare class EventDto extends DuckDto {
    summary: string;
    org: id;
    description: string;
    start: time;
    end: time;
    location: location;
    recurrence: recurrence[];
    volenteerSignUp: id[];
    attendeeSignUp: id[];
    cost: currency;
    public: boolean;
}
export declare class CreateEventDto extends DuckDto {
    summary: string;
    org: id;
    description: string;
    start: time;
    end: time;
    location: location;
    recurrence: recurrence[];
    volenteerSignUp: CustomFormFieldDto[];
    attendeeSignUp: CustomFormFieldDto[];
    cost: currency;
    public: boolean;
}
