import {DuckDto} from "ducktyper";
import {extendsDuckDto} from "./extendsDuckDto";

test("testing extendsDuckDto", ()=>{
    class Duck extends DuckDto {}

    expect(extendsDuckDto(Duck)).toBe(true);
    expect(extendsDuckDto(extendsDuckDto)).toBe(false);
    expect(extendsDuckDto(new Duck())).toBe(true);
    expect(extendsDuckDto(-123123)).toBe(false);
    expect(extendsDuckDto(String)).toBe(false);
});