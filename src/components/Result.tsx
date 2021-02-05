import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Autorenew from '@material-ui/icons/Autorenew';
import Print from '@material-ui/icons/Print';
import Button from '@material-ui/core/Button';
import Box from '@material-ui/core/Box';
import { Link } from 'react-router-dom';
import GaugeChart from 'react-gauge-chart';
import AreaChart from './AreaChart';
import AreaChartPeriods from './AreaChartPeriods';

import './Result.css';

import { resultTexts } from './resultTexts';

import {
    useParams,
} from 'react-router-dom';

import {
    minAge,
    maxAge,
} from './calculateRas';


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



    const userResultText = resultTexts
        .filter(textBlock => ras >= textBlock.min && ras <= textBlock.max)
        .map((textBlock, index) => {
            return <div key={index}>
                {textBlock.text}
            </div>;
        });

    return (
        <>


            <Grid container
                direction="row"
                justify="center"
                alignItems="center"

                spacing={1}>

                <Grid item md={12} lg={6}>
                    <Box m={2} p={2} >
                        <Typography
                            align="center"
                            variant="h5"
                            gutterBottom>
                            Your are {rasPercent.toFixed(1)}% menopausal
                         </Typography>

                    </Box>
                </Grid>

                <Grid item xs={12} sm={4} className="print-hide">
                    <GaugeChart
                        id='rasPercent-gauge'
                        animDelay={1000}
                        animate={true}
                        textColor='#ce5eba'
                        nrOfLevels={maxAge - minAge}
                        arcsLength={[0.1, 0.1, 0.1, 0.1, 0.1, 0.1, 0.1]}
                        colors={['#ce5eba', '#803d74']}
                        formatTextValue={(value) => `${parseFloat(value).toFixed(1)}%`}
                        percent={ras}
                        arcPadding={0.01}
                        cornerRadius={3}
                    />
                </Grid>



                <Grid item xs={12} >
                    <Box m={2} p={2} >
                        <Typography
                            align="left"
                            variant="body2">
                            {userResultText}
                        </Typography>
                    </Box>
                </Grid>

                {ovary < 2 && <>
                    <Grid item md={12} lg={10}>
                        <AreaChart
                            rasPercent={rasPercent}
                            age={age}
                            ovary={ovary}
                            periods={periods}
                            smoke={smoke} />
                    </Grid>
                    <Grid item md={12} lg={10}>
                        <AreaChartPeriods
                            rasPercent={rasPercent}
                            age={age}
                            ovary={ovary}
                            periods={periods}
                            smoke={smoke} />
                    </Grid> </>
                }

            </Grid>





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
