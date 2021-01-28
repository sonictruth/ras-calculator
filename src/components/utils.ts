export const range = (start: number, end: number, step: number = 1): number[] => {
    const len = Math.floor((end - start) / step) + 1;
    return Array(len).fill(undefined).map((_, idx) => start + (idx * step));
}
