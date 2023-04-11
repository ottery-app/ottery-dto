import { makeDuck, duckfaults } from "ducktyper";

export const isUSD = duckfaults(makeDuck(val=>val>=0), {
    message: "Not a valid USD"
});

export const isCost = duckfaults(isUSD, {
    message: "Not a valid cost"
});