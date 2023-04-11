import { isFemale, isGender, isMale } from "./gender";
import { gender } from "../../types/gender/gender";

test("testing male", ()=>{
    expect(isMale(gender.MALE)).toBe(true);
    expect(isMale(gender.FEMALE)).toBe(false);
    expect(isMale("asdsdafsd")).toBe(false);
    expect(isMale(true)).toBe(false);
});

test("testing female", ()=>{
    expect(isFemale(gender.MALE)).toBe(false);
    expect(isFemale(gender.FEMALE)).toBe(true);
    expect(isFemale("asdsdafsd")).toBe(false);
    expect(isFemale(true)).toBe(false);
});

test("testing gender", ()=>{
    expect(isGender(gender.MALE)).toBe(true);
    expect(isGender(gender.FEMALE)).toBe(true);
    expect(isGender("asdsdafsd")).toBe(false);
    expect(isGender(true)).toBe(false);
});