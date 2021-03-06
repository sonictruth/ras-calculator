import { Line } from 'react-chartjs-2';
import { range } from './utils';
import {
    defaultDatasetProp,
    mainDatasetStyles,
    secondaryDatasetStyles,
} from './areaChartStyles';
import calculateRas, {
    minAge,
    maxAge,
} from './calculateRas';


export default function AreaChart(props: any) {


    const userAge = parseInt(props.age);
    const userPeriods = parseInt(props.periods);
    const userOvary = parseInt(props.ovary);
    const userIsSmoking = parseInt(props.smoke);

    const yearsRange = range(minAge, maxAge);

    const labels = yearsRange.map(age =>
        age.toString());

    const dataSet = yearsRange.map(age =>
        calculateRas(age, userPeriods, userOvary, userIsSmoking) * 100);

    const isSmoking = userIsSmoking === 1;
    const dataSetInvertSmoke = yearsRange.map(age =>
        calculateRas(age, userPeriods, userOvary, isSmoking ? 0 : 1) * 100);


    return <Line
        legend={{
            display: true,
            position: 'top'
        }}
        options={{
            tooltips: {
                titleFontSize: 15,
                callbacks: {
                    title: (tooltipItem: any, data: any) => {
                        return `Age: ${tooltipItem[0].label}`;
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
                        if (parseInt(labels[context.dataIndex]) === userAge) {
                            return 10;
                        } else {
                            return 2;
                        }
                    },
                    label: 'You',
                    data: dataSet,
                    ...defaultDatasetProp,
                    ...mainDatasetStyles
                },
                {
                    label: isSmoking ? 'Without Smoking' : 'Smoking',
                    data: dataSetInvertSmoke,
                    ...defaultDatasetProp,
                    ...secondaryDatasetStyles
                },
            ]

        }} />;
}
