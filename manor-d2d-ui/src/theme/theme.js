import { createMuiTheme } from '@material-ui/core/styles';
import { red, grey } from '@material-ui/core/colors';

const theme = createMuiTheme({
    palette: {
        primary: red,
        background: {
            default: grey[200]
        },
        typography: {
            fontFamily: [
                '-apple-system',
                'BlinkMacSystemFont',
                '"Segoe UI"',
                'Roboto',
                '"Helvetica Neue"',
                'Oxygen',
                'sans-serif',
                'Ubuntu',
                'Cantarell',
                '"Fira Sans"',
                '"Droid Sans"'
            ].join(',')
        }
    }
});

export default theme;
