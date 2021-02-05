import { Line } from 'react-chartjs-2';

import { range } from './utils';

import {
    defaultDatasetProp,
    mainDatasetStyles,
} from './areaChartStyles';

import calculateRas, {

    minPeriods,
    maxPeriods,
} from './calculateRas';

export default function AreaChartPeriods(props: any) {

    const userAge = parseInt(props.age);
    const userPeriods = parseInt(props.periods);
    const userOvary = parseInt(props.ovary);
    const useIsSmoking = parseInt(props.smoke);

    const periodsRange = range(minPeriods, maxPeriods);

    const labels = periodsRange.map(numberOfPeriodsLastYear =>
        numberOfPeriodsLastYear.toString());

    const dataSet = periodsRange.map(numberOfPeriodsLastYear =>
        calculateRas(userAge, numberOfPeriodsLastYear, userOvary, useIsSmoking) * 100);


    return <Line
        legend={{
            display: false,
            position: 'top'
        }}
        options={{
            tooltips: {
                titleFontSize: 15,
                callbacks: {
                    title: (tooltipItem: any, data: any) => {
                        return `Number of periods last 12 months: ${tooltipItem[0].label}`;
                    },
                    label: (tooltipItem: any, data: any) => {
                        return `RAS: ${parseFloat(tooltipItem.value).toFixed(1)}`;
                    }
                },
                enabled: true,
            },
        }}
        data={{

            labels,
            datasets: [
                {
                    pointRadius: (context: any) => {
                        if (parseInt(labels[context.dataIndex]) === userPeriods) {
                            return 10;
                        } else {
                            return 2;
                        }
                    },
                    label: 'You',
                    data: dataSet,
                    ...defaultDatasetProp,
                    ...mainDatasetStyles
                }
            ]

        }} />;
}
