import {duckfaults, makeDuck} from "ducktyper";

export const isActivationCode = duckfaults(makeDuck(String), {
    message: "Not a valid activation code",
    allowEmpty: false,
});

export const isPassword = duckfaults(makeDuck(()=>true), {
    message: "Not a valid password",
});

export const isId = duckfaults(makeDuck(String), {
    message: 'Not a valid id',
});

export const arePerms = duckfaults(makeDuck([String]), {
    message: "Not a valid perm"
})