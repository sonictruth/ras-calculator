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
                    Calculate your menopausal transition
             </Typography>
                <Typography
                    align="center"
                    variant="body1"
                    gutterBottom>
                    This app calculates the progress of female reproductive ageing, respectively what
                    percentage of the menopausal transition has already happened. It is
                    based on fuzzy set theory and derived from data of a European Caucasian
                    population. <br /><br />The accuracy of the calculations is &gt; 85% and the original
research paper can be found <a rel="noreferrer" target="_blank" href="https://journals.plos.org/plosone/article?id=10.1371/journal.pone.0235478">here</a>.
                </Typography>
            </Container>
            <Box
                display="flex"
                justifyContent="center"
                m={2}
                p={2} >
                <Button color="primary"
                    variant="contained"
                    size="large"
                    component={Link}
                    to="/calculator">
                    Let's Begin
                 </Button>
            </Box>

            <Box
                display="flex"
                justifyContent="center"
                m={2}
                p={2} >
                <Button color="secondary"
                    variant="outlined"
                    size="small"
                    component={Link}
                    to="/research">
                    Reaserch Info
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
