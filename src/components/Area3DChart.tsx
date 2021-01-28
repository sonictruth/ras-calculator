import Plot from 'react-plotly.js';
import Plotly from 'plotly.js';
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
    camera: { eye: { x: 2.2, y: 1, z: 1 } }
  },
  paper_bgcolor: 'transparent',
  margin: { l: 1, r: 1, b: 1, t: 1, },
  width: 500,
  height: 450,
  autosize: false,
  surfacecolor: ['green', 'blue'],
};


const handleInitialised = (figure: any, rootDiv: HTMLElement) => {

  function rotate(angle: number) {
    const eye = layout.scene.camera.eye
    const rtz = xyz2rtz(eye);
    rtz.t += angle;
    const newEye = rtz2xyz(rtz);
    layout.scene.camera.eye = newEye;
    Plotly.relayout(rootDiv, layout);
  }
  function xyz2rtz(xyz: any) {
    return {
      r: Math.sqrt(xyz.x * xyz.x + xyz.y * xyz.y),
      t: Math.atan2(xyz.y, xyz.x),
      z: xyz.z
    };
  }
  function rtz2xyz(rtz: any) {
    return {
      x: rtz.r * Math.cos(rtz.t),
      y: rtz.r * Math.sin(rtz.t),
      z: rtz.z
    };
  }
  function run() {
    rotate(Math.PI / 180);
  
  }
  //setInterval(run, 200);
}

const config = {
  displayModeBar: false,
  responsive: false,
  modeBarButtonsToRemove: ['plotyjs'] as any,
};

export default function Area3dChart(props: any) {
  return <>
    <Plot
      onClick={() => console.log('click')}
      onInitialized={handleInitialised}
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
