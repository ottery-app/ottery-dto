import {isUserLink} from "./isUserLink";

test("checks if isUserLink is working as intended", ()=>{
    expect(isUserLink(["123","123"])).toBe(true);
    expect(isUserLink(["123",123])).toBe(false);
    expect(isUserLink(["123","kkoasdf"])).toBe(true);
    expect(isUserLink(["123"])).toBe(false);
    expect(isUserLink(["123","123", 123])).toBe(true);
})