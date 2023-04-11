export function makeEnumVal(enummerator) {
    return function isEnum(state) {
        const keys = Object.values(enummerator).filter(val=>val===state);
        return keys.length > 0;
    }
}