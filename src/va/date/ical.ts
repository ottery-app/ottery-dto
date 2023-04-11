import {duckfaults, makeDuck} from "ducktyper";

export const isRecurrence = duckfaults(makeDuck((val)=>{
    if (typeof val === 'string' || val instanceof String){
        if (val.includes('RRULE:')) {
            val = val.replace('RRULE:', '').split(';');
            
            for (let i = 0; i < val.length; i++) {
                let pair = val[i].split('=');
                if (pair.length != 2) {
                    return false;
                }

                if (pair[1] === 'undefined') {
                    return false;
                }

            }
            
            return true;
        }
    }

    return false;
}), {
    message: 'Not a valid recurrence',
});