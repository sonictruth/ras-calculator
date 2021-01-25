import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import ArrowForward from '@material-ui/icons/ArrowForward';
import Button from '@material-ui/core/Button';
import Box from '@material-ui/core/Box';
import { Link } from 'react-router-dom'

function Calculator() {
    return (
        <>
            <Box display="flex"
                justifyContent="center"
                m={1}
                p={1} >
                <Button
                    color="primary"
                    variant="contained"
                    component={Link}
                    to="/result/1">
                    Calculate
                </Button>
            </Box>

            <Box display="flex"
                justifyContent="center"
                m={1}
                p={1} >
                <IconButton
                    component={Link}
                    to="/about"
                    aria-label="delete">
                    <ArrowBackIcon />
                </IconButton>
            </Box>

        </>
    );
}

export default Calculator;
