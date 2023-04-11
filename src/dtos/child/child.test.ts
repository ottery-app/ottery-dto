import {CreateChildDto} from "./child";
import { gender } from "../../types/gender/gender";
import {dtoToIsDuck} from "ducktyper";
import { classifyDto } from "../../ports/classifyDto";

test("testing the child dto", ()=>{
    const child = new CreateChildDto()
    child.dateOfBirth=new Date().getTime(),
    child.firstName="asdf",
    child.middleName="asdf",
    child.lastName="asdf",
    child.gender=gender.MALE,
    child.pfp={
        lastModified: 12312,
        name: "adfasdf",
        size: 123123,
        src: "asdfdasdf",
        type: "afasd",
    },

    expect(dtoToIsDuck(CreateChildDto)({})).toBe(false);
    expect(dtoToIsDuck(CreateChildDto)(child)).toBe(true);
    expect(classifyDto(child)).toBe(true);
});