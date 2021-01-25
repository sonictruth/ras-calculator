export default function calculateBmi(
    height: number,
    weight: number,
) {
    return weight / (height / 100 * height / 100);
}
