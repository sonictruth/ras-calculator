import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import AddToHomeScreenIcon from '@material-ui/icons/AddToHomeScreen';
import Box from '@material-ui/core/Box';
import { Link } from 'react-router-dom';


function About() {
    return (
        <>
            <Typography gutterBottom>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Etiam in luctus diam, eu hendrerit leo. Praesent libero ligula,
                commodo ut lacinia vitae, venenatis in ipsum. Aenean at nisi ullamcorper,
                sagittis turpis ut, pulvinar ipsum. Praesent luctus ipsum fermentum, ornare sem in,
                vestibulum mauris. Etiam congue congue mattis. Praesent id tellus et tortor suscipit
                porttitor. Etiam massa nunc, bibendum et arcu et, vulputate tempor mi. Fusce
                in augue sed mauris tempus commodo non pretium mauris. Nunc sagittis, felis id auctor placerat, tortor nisi bibendum mi, eu luctus tortor mauris eget sapien. Cras eu faucibus odio, in semper diam. Etiam non velit iaculis augue feugiat fringilla.
                Maecenas vel leo eget est tempor rutrum eget nec est. Donec augue sem, tincidunt
                in feugiat in, aliquam nec ex.
             </Typography>

            <Box display="flex" justifyContent="center" m={1} p={1} >
                <Button color="primary"
                    variant="contained"
                    component={Link}
                    to="/calculator">
                    Let's Begin
            </Button>
            </Box>
            <Box display="flex" justifyContent="center" m={1} p={1} >
                <Button
                    startIcon={<AddToHomeScreenIcon />}
                    variant="contained"
                    component={Link}
                    to="/calculator">
                    Add to homescreen
            </Button>
            </Box>

        </>
    );
}

export default About;
