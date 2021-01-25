import Typography from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom'

function Calculator() {
    return (
        <>
            <h1>Calculator</h1>
            <Button color="primary" component={Link} to="/">
                Calculator
             </Button>
        </>
    );
}

export default Calculator;
