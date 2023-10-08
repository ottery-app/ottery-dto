import {DuckDto} from "ducktyper";
import {isDto} from "./isDto";

test("testing extendsDuckDto", ()=>{
    class Duck extends DuckDto {}

    expect(isDto(Duck)).toBe(true);
    expect(isDto(isDto)).toBe(false);
    expect(isDto(new Duck())).toBe(true);
    expect(isDto(-123123)).toBe(false);
    expect(isDto(String)).toBe(false);
});