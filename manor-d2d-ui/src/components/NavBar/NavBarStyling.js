import { makeStyles } from '@material-ui/core/styles';
import { grey, red } from '@material-ui/core/colors';

const useStyles = makeStyles(theme => ({
    appBar: {
        backgroundColor: theme.palette.common.white,
        padding: '1.75% 7% 1.5% 7%'
    },
    buttonGrid: {
        justifyContent: 'flex-end',
        [theme.breakpoints.down('md')]: {
            display: 'none'
        }
    },
    navButton: {
        fontWeight: 600,
        fontSize: '0.875rem',
        color: grey[900],
        '&:hover': {
            color: red[800],
            backgroundColor: theme.palette.common.white
        }
    },
    appBarTitle: {
        color: red[800],
        fontSize: '1.875rem',
        fontWeight: 500
    },
    appBarSubtitle: {
        color: grey[800]
    },
    imageGrid: {
        [theme.breakpoints.down('sm')]: {
            display: 'none'
        }
    },
    menuGrid: {
        display: 'none',
        [theme.breakpoints.down('md')]: {
            display: 'initial'
        }
    },
    menu: {
        backgroundColor: grey[900]
    },
    menuButton: {
        fontSize: 'larger',
        '&:hover': {
            color: red[800],
            backgroundColor: theme.palette.common.white
        }
    },
    menuItem: {
        color: theme.palette.common.white,
        '&:hover': {
            fontWeight: 'bold'
        }
    }
}));

export default useStyles;
