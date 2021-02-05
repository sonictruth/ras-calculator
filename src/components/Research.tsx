import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import IconButton from '@material-ui/core/IconButton';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import { Link } from 'react-router-dom';
import Area3DChart from './Area3DChart';
import researchTable from './research-table.png';

function Research() {
    return (
        <>
            <Container maxWidth="sm">

                <Typography
                    variant="h5"
                    align="center"
                    gutterBottom>
                    Information For Researchers
             </Typography>
                <Typography
                    align="center"
                    variant="body1"
                    gutterBottom>
                    Here you will be able to download an R module.
                </Typography>

                <img alt="research table" src={researchTable} width="100%"/>
            </Container>


            <Box >
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

export default Research;
