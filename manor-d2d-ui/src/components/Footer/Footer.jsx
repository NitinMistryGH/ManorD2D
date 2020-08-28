import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {
    AppBar,
    Toolbar,
    Typography
} from '@material-ui/core';
import { red, grey } from '@material-ui/core/colors';

const useStyles = makeStyles(theme => ({
    footer: {
        borderTop: `3px solid${red[800]}`,
        borderBottom: `3px solid${red[800]}`,
        backgroundColor: grey[900],
        color: theme.palette.common.white,
        top: 'auto',
        bottom: 0,
        position: 'inherit'
        position: 'fixed'
    },
    content: {
        justifyContent: 'center'
    }
}));

const Footer = () => {
    const styles = useStyles();

    return (

        <AppBar
            position='absolute'
            className={styles.footer}
            id='footer-component'
        >
            <Toolbar className={styles.content}>
                <Typography
                    variant='body1'
                    id='footer-text'
                    data-testid='footer-text'
                >
                    | Founder Acharya: A.C. Bhaktivedanta Swami Prabhupada |
                </Typography>
            </Toolbar>
        </AppBar>

    );
};

export default Footer;

Footer.defaultProps = {};
Footer.propTypes = {};
