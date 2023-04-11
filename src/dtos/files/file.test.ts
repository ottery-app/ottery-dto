import { FileDto } from "./file";
import {dtoToIsDuck} from "ducktyper";
import { classifyDto } from "../../ports/classifyDto";

test("Testing the file dto", ()=>{
    try {
        dtoToIsDuck(FileDto)({
            lastModified:123123,
            name:"file",
            size: 123,
            src: 123,
            type: "text",
        }, {
            forceDuckDto:true,
            throw:true,
        });
        expect(false).toBe(true);
    } catch (e) {
        expect(e.message).toBe("Not a valid src");
    }

    try {
        dtoToIsDuck(FileDto)({
            lastModified:123123,
            name:"file",
            size: undefined,
            src: "asdf",
            type: "text",
        }, {
            forceDuckDto:true,
            throw:true,
        });
        //expect(false).toBe(true);
    } catch (e) {
        //expect(e.message).toBe("Not a valid file size");
    }

    try {
        dtoToIsDuck(FileDto)({
            name:"file",
            size: 123,
            src: "asdf",
            type: "text",
        }, {
            forceDuckDto:true,
            throw:true,
        });
        //expect(false).toBe(true);
    } catch (e) {
        //expect(e.message).toBe("Not a valid last modified date");
    }

    try {
        dtoToIsDuck(FileDto)({}, {
            forceDuckDto:true,
            throw:true,
        });
        //expect(false).toBe(true);
    } catch (e) {
        //expect(e.message).toBe("Not a valid last modified date");
    }

    try {
        dtoToIsDuck(FileDto)(undefined, {
            forceDuckDto:true,
            throw:true,
        });
        //expect(false).toBe(true);
    } catch (e) {
        //expect(e.message).toBe("Not a valid last modified date");
    }
});

test("Testing the file dto", ()=>{
    let file = new FileDto();
    // file.lastModified = 123;
    // file.name = "adsf";
    // file.size = 123;
    file.src = "asdf";
    // file.type = "adsf"

    try {
        expect(classifyDto(file, {throw: true})).toBe(true);
    } catch (e) {
        expect(false).toBe(true);   
    }

    file = Object.assign(file, {src:123});

    try {
        expect(classifyDto(file, {throw: true})).toBe(false);
    } catch (e) {
        expect(e.message).toBe("Not a valid src");
    }
});