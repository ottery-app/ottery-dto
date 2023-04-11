import { ImageDto } from "./image";
import {dtoToIsDuck} from "ducktyper";
import { classifyWithDto } from "../../ports/classifyWithDto";

test("Testing the file dto", ()=>{
    try {
        dtoToIsDuck(ImageDto)({
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
        dtoToIsDuck(ImageDto)({
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
        dtoToIsDuck(ImageDto)({
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
        dtoToIsDuck(ImageDto)({}, {
            forceDuckDto:true,
            throw:true,
        });
        //expect(false).toBe(true);
    } catch (e) {
        //expect(e.message).toBe("Not a valid last modified date");
    }

    try {
        dtoToIsDuck(ImageDto)(undefined, {
            forceDuckDto:true,
            throw:true,
        });
        //expect(false).toBe(true);
    } catch (e) {
        //expect(e.message).toBe("Not a valid last modified date");
    }
});

test("Testing the file dto", ()=>{
    let file = new ImageDto();
    // file.lastModified = 123;
    // file.name = "adsf";
    // file.size = 123;
    file.src = "asdf";
    // file.type = "adsf"

    try {
        //expect(classifyDto(file, {throw: true})).toBe(true);
    } catch (e) {
        //expect(false).toBe(true);   
    }

    file = Object.assign(file, {src:123});

    try {
        //expect(classifyDto(file, {throw: true})).toBe(false);
    } catch (e) {
        //expect(e.message).toBe("Not a valid src");
    }
});

test("An image oddity with extra fields", ()=>{
    const img = {
        src: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAcM",
        lastModified: 1670524999342,
        lastModifiedDate: new Date(),
        name: "guard.PNG",
        size: 280343,
        type: "image/png",
        webkitRelativePath:""
    }

    expect(classifyWithDto(ImageDto, img)).toBe(true);
});