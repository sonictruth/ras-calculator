import Typography from '@material-ui/core/Typography';
import Autorenew from '@material-ui/icons/Autorenew';
import Print from '@material-ui/icons/Print';
import Button from '@material-ui/core/Button';
import Box from '@material-ui/core/Box';
import { Link } from 'react-router-dom'

import {
    useParams,
} from 'react-router-dom';

function Result() {
    const params: any = useParams();
    const ras: number = parseFloat(params.ras);
    const bmi: number = parseFloat(params.bmi);

    let bmiText = '';
    if (bmi < 18.5) bmiText = 'underweight';
    if (bmi >= 18.5 && bmi <= 24.9) bmiText = 'normal';
    if (bmi >= 25.0 && bmi <= 24.9) bmiText = 'overweight';
    if (bmi >= 30) bmiText = 'obese';

    if (!ras || !bmi) {
        return <>Not found</>;
    }

    return (
        <>

             <Typography
                align="center"
                variant="h5"
                gutterBottom>
                Your RAS is {ras.toFixed(2)}
             </Typography>
            <Typography
                align="center"
                variant="body1"
                gutterBottom>
                Your BMI is {bmi.toFixed(2)} ({bmiText})
             </Typography>



            <Box display="flex" justifyContent="center" m={1} p={1} >
                <Button
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

        </>
    );


}

export default Result;
