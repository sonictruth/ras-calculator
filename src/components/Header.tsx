import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import logo from '../logo.svg';
import { CSSTransition } from 'react-transition-group';
import './Header.css';

export default function Header() {

    return (
        <>
            <Grid container
                direction="row"
                justify="center"
                alignItems="center"
                spacing={1}>
                <Grid item xs={3} sm={2}>
                    <CSSTransition
                        unmountOnExit
                        in={true}
                        timeout={{ appear: 300, enter: 300, exit: 300 }}
                        classNames='roll'
                        appear
                    >
                        <img alt="logo" src={logo} />
                    </CSSTransition>
                </Grid>
                <Grid item xs={12} sm={7}>
                    <CSSTransition
                        unmountOnExit
                        in={true}
                        timeout={{ appear: 300, enter: 300, exit: 300 }}
                        classNames='fade'
                        appear
                    >
                        <Typography
                            align="center"
                            variant="h4"
                            gutterBottom>
                            Reproductive Ageing Score
             </Typography>
                    </CSSTransition>
                </Grid>
            </Grid>
        </>
    );
}
