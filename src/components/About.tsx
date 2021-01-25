import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';

function About() {
    return (
        <>
 <Typography variant="h4" component="h1" gutterBottom>
          Create React App v4-beta example
        </Typography>

            <Button color="primary" variant="contained" component={Link} to="/calculator">
                Calculator
     </Button>
        </>
    );
}

export default About;
