import Plot from 'react-plotly.js';
import { range } from './utils';
import calculateRas, {
  minAge,
  maxAge,
  minPeriods,
  maxPeriods,
} from './calculateRas';

import './Area3DChart.css';


const ageRange = range(minAge, maxAge);
const periodRange = range(minPeriods, maxPeriods, 0.48);

const z: Array<number>[] = [];
const x: number[] = ageRange;
const y: number[] = periodRange;
periodRange.forEach(period => {
  const line: Array<number> = [];
  ageRange.forEach(age => {
    line.push(parseFloat(calculateRas(age, period, 0, 0).toFixed(3)));
  })
  z.push(line.reverse());
});


const layout = {
  showlegend: false,
  scene: {
    xaxis: {
      title: 'Age',
    },
    yaxis: {
      title: 'M/Year',
    },
    zaxis: {
      title: 'Score',
    },
    aspectratio: { x: 1, y: 1, z: 1 },
    camera: { eye: { x: 1.8 } }
  },
  paper_bgcolor: 'transparent',
  margin: { l: 1, r: 1, b: 1, t: 1, },
  width: 500,
  height: 450,
  autosize: false,
  surfacecolor: ['green', 'blue'],
};

const config = {
  displayModeBar: false,
  responsive: false,
  modeBarButtonsToRemove: ['plotyjs'] as any,
};

export default function Area3dChart(props: any) {
  return <>
    <Plot
      data={
        [
          {
            colorscale: [[0, '#4bd15f'], [.7, '#F5CD19'], [1, '#EA4228']],
            showscale: false,
            showlegend: false,
            opacity: 1,
            type: 'surface',
            zsmooth: 'best',
            z, 
            x, y,
 
          }
        ]
      }
      config={config}
      layout={layout}
    />
  </>;
}
