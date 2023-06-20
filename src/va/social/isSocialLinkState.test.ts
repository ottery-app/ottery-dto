import {isSocialLinkState} from "./isSocialLinkState";
import { socialLinkState } from "../../types/social/socialLinkState";

test("this is testing a basic test of isSocialLinkState", ()=>{
    const vals = Object.values(socialLinkState);

    for (let i = 0; i < vals.length; i++) {
        expect(isSocialLinkState(vals[i])).toBe(true);
    }

    expect(isSocialLinkState("lkasjdflkjasldkfjkjhkjhasdfhjjkhjkasdfhhjasfdjkhksdfjkhjkjkewtnsfduihoewrbnsfdhj")).toBe(false);
    
})