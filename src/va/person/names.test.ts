import { isName, isFirstName, isLastName, isMiddleName } from "./names";

test("testing name types", ()=>{
    const names = [isName, isFirstName, isLastName, isMiddleName];

    names.forEach((isName)=>{
        expect(isName("Benjamin")).toBe(true);
        expect(isName("")).toBe(false);
        expect(isName("gflkjlkjfdgljkadfg")).toBe(true);
        expect(isName("123123123")).toBe(false);
        expect(isName(1234)).toBe(false);
        expect(isName("la-crox")).toBe(true);
        expect(isName("la crox")).toBe(true);
        expect(isName({})).toBe(false);
        expect(isName(undefined)).toBe(false);
    });
});