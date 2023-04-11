import { makeDuck, duckfaults } from "ducktyper";

export const isAddress = duckfaults(makeDuck(String), {
    message: "Not a valid address",
});