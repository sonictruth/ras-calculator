import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Button from '@material-ui/core/Button';
import AddToHomeScreenIcon from '@material-ui/icons/AddToHomeScreen';
import Box from '@material-ui/core/Box';
import { Link } from 'react-router-dom';
import Footer from './Footer';


function About() {
    return (
        <>
            <Container maxWidth="sm">
                <Typography
                    variant="h5"
                    align="center"
                    gutterBottom>
                    Calculate your menopausal status
             </Typography>
                <Typography
                    align="center"
                    variant="body1"
                    gutterBottom>
                    This calculator is based on data from a Northern European caucasian
                    population and gives merely an educated guess based on fuzzy set theory.
             </Typography>
            </Container>
            <Box
                display="flex"
                justifyContent="center"
                m={4}
                p={4} >
                <Button color="primary"
                    variant="contained"
                    size="large"
                    component={Link}
                    to="/calculator">
                    Let's Begin
            </Button>
            </Box>


            <Box display="flex" justifyContent="center" m={1} p={1} >
                <Button
                    startIcon={<AddToHomeScreenIcon />}
                    variant="outlined"
                    size="small"
                    component={Link}
                    to="/help">
                    Install
            </Button>
            </Box>
            <Footer />
        </>
    );
}

export default About;
