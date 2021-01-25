import React from 'react';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';

export default function Footer() {
    return (
        <Box
            component="div"
            m={1}>
            <Typography
                variant="body2"
                color="textSecondary"
                align="center">
                Copyright &copy;   Kai, Alexandru Constantin 2020
        </Typography>
        </Box>
    );
}