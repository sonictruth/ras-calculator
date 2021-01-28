import { Line } from 'react-chartjs-2';
import calculateRas from './calculateRas';
import { range } from './utils';

const defaultDatasetProp = {
    fill: true,
    lineTension: 0.1,
    backgroundColor: 'rgba(15,192,192,0.4)',
    borderColor: 'rgba(75,192,192,1)',
    borderCapStyle: 'butt',
    borderDash: [],
    borderDashOffset: 0.0,
    borderJoinStyle: 'miter',
    pointBorderColor: 'rgba(75,192,192,1)',
    pointBackgroundColor: '#fff',
    pointBorderWidth: 5,
    pointHoverRadius: 10,
    pointHoverBackgroundColor: 'rgba(75,192,192,1)',
    pointHoverBorderColor: 'rgba(220,220,220,1)',
    pointHoverBorderWidth: 2,
    pointHitRadius: 10,
}


export default function AreaChart(props: any) {
    const minAge = parseInt(props.minAge);
    const maxAge = parseInt(props.maxAge);

    const age = parseInt(props.age);
    const periods = parseInt(props.periods);
    const ovary = parseInt(props.ovary);
    const smoke = parseInt(props.smoke);

    const years = range(minAge, maxAge);

    const labels = years.map(age =>
        age.toString());

    const dataSet = years.map(age =>
        calculateRas(age, periods, ovary, smoke) * 100);

    const isSmoking = smoke === 1;
    const dataSetInvertSmoke = years.map(age =>
        calculateRas(age, periods, ovary, isSmoking ? 0 : 1) * 100);


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
                        return `Age ${tooltipItem[0].label}`;
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
                        if (parseInt(labels[context.dataIndex]) === age) {
                            return 10;
                        } else {
                            return 2;
                        }
                    },
                    label: 'You',
                    data: dataSet,
                    ...defaultDatasetProp
                },
                {
                    borderColor: '#BDB76B',
                    backgroundColor: '#F0E68C',
                    label: isSmoking ? 'Without Smoking' : 'Smoking',
                    data: dataSetInvertSmoke
                },
            ]

        }} />;
}
