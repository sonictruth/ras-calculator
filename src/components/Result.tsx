import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Autorenew from '@material-ui/icons/Autorenew';
import Print from '@material-ui/icons/Print';
import Button from '@material-ui/core/Button';
import Box from '@material-ui/core/Box';
import { Link } from 'react-router-dom';
import GaugeChart from 'react-gauge-chart';
import AreaChart from './AreaChart';
import Area3DChart from './Area3DChart';

import './Result.css';

import {
    useParams,
} from 'react-router-dom';

const minAge = 35;
const maxAge = 66;


function Result() {
    const params: any = useParams();
    const ras: number = parseFloat(params.ras);
    const rasPercent: number = ras * 100;
    const bmi: number = parseFloat(params.bmi);
    const age: number = parseFloat(params.age);
    const periods: number = parseFloat(params.periods);
    const ovary: number = parseFloat(params.ovary);
    const smoke: number = parseFloat(params.smoke);

    let bmiText = '';
    if (bmi < 18.5) bmiText = 'underweight';
    if (bmi >= 18.5 && bmi <= 24.9) bmiText = 'normal';
    if (bmi >= 25.0 && bmi <= 24.9) bmiText = 'overweight';
    if (bmi >= 30) bmiText = 'obese';

    if (!ras || !bmi) {
        return <></>;
    }

    return (
        <>


            <Grid container
                direction="row"
                justify="center"
                alignItems="center"

                spacing={1}>
                <Grid item xs={12} sm={4} className="print-hide">
                    <GaugeChart
                        id='rasPercent-gauge'
                        animDelay={1000}
                        animate={true}
                        textColor='#ce5eba'
                        nrOfLevels={maxAge - minAge}
                        arcsLength={[0.3, 0.5, 0.2]}
                        colors={['#4bd15f', '#F5CD19', '#EA4228']}
                        formatTextValue={(value) => `${parseFloat(value).toFixed(1)}%`}
                        percent={ras}
                        cornerRadius={10}
                        arcPadding={0.02}
                    />

                </Grid>

                <Grid item xs={12} sm={6}>
                    <Box m={2} p={2} >
                        <Typography
                            align="center"
                            variant="h5"
                            gutterBottom>
                            Your are {rasPercent.toFixed(1)}% menopausal
                         </Typography>
                        <Typography
                            align="center"
                            variant="body1"
                            gutterBottom>
                            Your BMI is {bmi.toFixed(1)} ({bmiText})
                         </Typography>
                    </Box>
                </Grid>
                <Grid item xs={12} sm={10}>
                    <AreaChart
                        rasPercent={rasPercent}
                        age={age}
                        ovary={ovary}
                        periods={periods}
                        smoke={smoke}
                        minAge={minAge}
                        maxAge={maxAge} />
                </Grid>
            </Grid>


            <Box className="print-hide">
                <Grid container

                    direction="row"
                    justify="center"
                    alignItems="center">
                    <Grid item xs={12} sm={7} >
                        <Area3DChart />
                    </Grid>
                    <Grid item xs={12} >
                        <Typography
                            align="center"
                            variant="body2"
                            gutterBottom>
                            Drag the chart to roate it.
                         </Typography>
                    </Grid>
                </Grid>
            </Box>



            <Box className="print-hide">
                <Box display="flex" justifyContent="center" m={1} p={1} >
                    <Button
                        onClick={() => window.print()}
                        startIcon={<Print />}
                        variant="outlined"
                        size="small">
                        Print Results
            </Button>
                </Box>

                <Box display="flex"
                    justifyContent="center"
                    m={1}
                    p={1} >
                    <Button
                        startIcon={<Autorenew />}
                        color="primary"
                        variant="contained"
                        component={Link}
                        to="/calculator">
                        Try Again
                </Button>
                </Box>
            </Box>

        </>
    );


}

export default Result;
