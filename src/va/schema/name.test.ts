import {isSchemaName} from "./name";

test("testing if the schema name is a string that has its first char capitalized", ()=>{
    expect(isSchemaName("Benjamin")).toBe(true)
    expect(isSchemaName("benjamin")).toBe(false)
});