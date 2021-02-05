import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Container from '@material-ui/core/Container';
import { Link } from 'react-router-dom'

function Calculator() {
    return (
        <>

            <Container maxWidth="sm">

                <Typography
                    variant="h5"
                    align="center"
                    gutterBottom>
                    Install
</Typography>
                <Typography
                    align="center"
                    variant="body1"
                    gutterBottom>
                    This is a progressive web application, that means it can be installed on your phone or computer and it works offline.<br />
                    Ussualy this is done by going to your browser settings and choose 'Install' or 'Add to Home'.<br /><br />
                    Click <a rel="noreferrer" target="_blank" href="https://support.google.com/chrome/answer/9658361?">here</a> to read more about it.<br />
                </Typography>


            </Container>


            <Box display="flex"
                justifyContent="center"
                m={1}
                p={1} >
                <IconButton
                    component={Link}
                    to="/about">
                    <ArrowBackIcon />
                </IconButton>
            </Box>

        </>
    );
}

export default Calculator;
