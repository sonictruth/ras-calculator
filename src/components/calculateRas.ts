export default function calculateRas(
    age: number,
    periods: number,
    ovary: number,
    smoke: number) {

    const mu_periods = 1 - Math.exp(-0.00047014 * Math.pow((periods - 0.7), 4) + 0.00894 *
        Math.pow((periods - 0.7), 3) - 0.03072 * Math.pow((periods - 0.7), 2) + 0.0861 *
        (periods - 0.7) - 2.31719);

    const a20 = ovary === 1 ? 1 : 0;
    const a21 = smoke === 1 ? 2 : 0;

    let mu_age = 0.00470857774049832 *
       Math.pow(age + a20 + a21, 2) - 0.0866242927285241 *
        (age + a20 + a21) - 7.64677252050801
    mu_age = Math.exp(mu_age) / (1 + Math.exp(mu_age));

    
    return ovary === 2 ? 1 : mu_periods + mu_age - (mu_periods * mu_age)
}

export const minPeriods = 0;
export const maxPeriods = 15;
export const minAge = 35;
export const maxAge = 66;

