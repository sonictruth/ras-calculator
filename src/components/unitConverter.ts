import convertUnits from "convert-units";

export default function convert(
    value: number,
    fromType: string,
    isImperial: boolean,
) {
    let toType;
    if (isImperial) {
        if (fromType === 'kg') {
            toType = 'lb'
        }
        if (fromType === 'cm') {
            toType = 'in'
        }
        if (fromType === 'lb') {
            toType = 'kg'
        }
        if (fromType === 'in') {
            toType = 'cm'
        }
        return Math.round(convertUnits(value).from(fromType as any).to(toType as any));
    } else {
        return value;
    }
}
