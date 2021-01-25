import React from 'react';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import logo from '../logo.svg';

export default function Header() {
    return (
        <Grid container 
            alignItems="center"
            justify="center" 
            spacing={3}>
            <Grid item xs={2}>
                <img alt="logo" src={logo} />
            </Grid>
            <Grid item xs={10}>
                <Typography
                 align="left"
                variant="h4"  
                gutterBottom>
                    Reproductive Ageing Score
             </Typography> 
            </Grid>
        </Grid>
    );
}
