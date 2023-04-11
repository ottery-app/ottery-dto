import { isUnixDate } from "./unix";

test("testing unix time", ()=>{
    expect(isUnixDate(123123123123)).toBe(true);
    expect(isUnixDate(0)).toBe(true);
    expect(isUnixDate(-123123)).toBe(true);
    expect(isUnixDate("123,123123123")).toBe(false);
    expect(isUnixDate("123123123123")).toBe(false);
    expect(isUnixDate("12312.3123123")).toBe(false);
    expect(isUnixDate("76")).toBe(false);
    expect(isUnixDate(8.9)).toBe(false);
});