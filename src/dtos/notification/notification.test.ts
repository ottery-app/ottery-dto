import { NotificationDto } from "./notification.dto";
import { notification as NOTIFICATION } from "../../types/notification/notification.enum";
import { classifyDuck } from "ducktyper";

test("test", ()=>{
    let notification = new NotificationDto();
    notification.message = "lskdjflkajsd";
    notification.read = false;
    notification.sender = {
        id: "laskdjflksadflkjsadlkj",
        ref: "User",
    };
    notification.time = new Date().getTime();
    notification.type = NOTIFICATION.friendrequest
    expect(classifyDuck(notification, {throw: true}),).toBe(true);
})