import React from 'react';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import logo from '../logo.svg';
import { CSSTransition } from 'react-transition-group';
import './Header.css';

export default function Header() {
    return (


        <Grid container
            alignItems="center"
            justify="center"
            spacing={3}>
            <Grid item xs={2}>
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
            <Grid item xs={10}>
                <CSSTransition
                    unmountOnExit
                    in={true}
                    timeout={{ appear: 300, enter: 300, exit: 300 }}
                    classNames='fade'
                    appear
                >
                    <Typography
                        align="left"
                        variant="h3"
                        gutterBottom>
                        Reproductive Ageing Score
             </Typography>
                </CSSTransition>
            </Grid>
        </Grid>

    );
}
