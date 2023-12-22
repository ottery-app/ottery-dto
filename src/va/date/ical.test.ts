import {RRule} from "rrule";

test("testing rrule", ()=>{
    const options = {
        freq: RRule.DAILY, // Set the frequency to daily (you can change this to other frequencies)
        dtstart: new Date(2023, 0, 1), // Set the start date (year, month - 1, day)
        /* Other rule options can be added here */
    };
    
    // Create the recurring rule
    const rule = new RRule(options);

    console.log("this is a test");
    console.log(rule.toString())
})