import {FormFieldDto} from './formField';
import {classifyWithDto} from '../../ports/classifyWithDto';
import { inputType } from '../../types/input/input.enums';
import { noId } from '../../types/auth/id';

test('Testing form field dto', () => {
    const obj = {
        _id:"659720e5907b1df88c6797ae",
        label: "label",
        type: "Phone",
        note: "this is a checkbox",
        required: false,
        forEvent: "000000000000000000000000",
        baseFor: [],
        permanent: false,
    }; 

    // const obj = {
    //     "_id":"659720e5907b1df88c6797ae",
    //     "label":"Phone",
    //     "type":inputType.PHONE,
    //     "note":"This is the best phone number to contact this person.",
    //     "baseFor":["guardian","caretaker"],
    //     "forEvent":"000000000000000000000000",
    //     "requred":false,
    //     "permanent":true,
    //     "__v":0
    // };

    // Assert: Check the result or behavior
    expect(classifyWithDto(FormFieldDto, obj)).toEqual(true);
});