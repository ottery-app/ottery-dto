import { IdDto } from "../../lib";
import { isDuckDto } from "./isDuckDto";

test("testing isDuckDto", ()=>{
    expect(isDuckDto(IdDto)).toBe(true);
    expect(isDuckDto(isDuckDto)).toBe(false);
    expect(isDuckDto(new IdDto())).toBe(true);
    expect(isDuckDto(-123123)).toBe(false);
    expect(isDuckDto(String)).toBe(false);
});