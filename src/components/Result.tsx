import Typography from '@material-ui/core/Typography';
import Autorenew from '@material-ui/icons/Autorenew';
import Button from '@material-ui/core/Button';
import Box from '@material-ui/core/Box';
import { Link } from 'react-router-dom'

import {
    useParams,
} from 'react-router-dom';

function Result() {
    const params: any = useParams();
    const value = params.value;

    return (
        <>

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
