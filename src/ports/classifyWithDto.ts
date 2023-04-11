import {dtoToIsDuck} from "ducktyper";

const cache = new Map();

export function classifyWithDto(dto, obj, options?) {
    if (!cache.get(dto)) {
        cache.set(dto, dtoToIsDuck(dto))
    }
    return cache.get(dto)(obj, options);
}