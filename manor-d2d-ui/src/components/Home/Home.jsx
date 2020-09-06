import React from 'react';
import { connect } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import { deepOrange, indigo } from '@material-ui/core/colors';
import Alert from '@material-ui/lab/Alert';
import { BarLoader } from 'react-spinners';
import { css } from "@emotion/core";

import StreetsTable from '../StreetsTable/StreetsTable';

const mapStateToProps = state => ({
    streets: state.streets
})

const useStyles = makeStyles(theme => ({
    mainText: {
        color: indigo[900],
        fontWeight: 'bold',
        fontSize: '0.9375rem'
    },
    redText: {
        color: theme.palette.primary.main,
        fontWeight: 'bold',
        fontSize: '0.9375rem'
    },
    orangeText: {
        color: deepOrange[500],
        fontWeight: 'bold',
        fontSize: '0.9375rem'
    }

}))
const Home = ({ streets }) => {
    const styles = useStyles();
    const streetsIsDefined = streets.data !== undefined && !streets.loading;
    const streetsError = streets.error !== undefined;

    const loadingCss = css`
    justify-content:center;
    display: block;
    margin: 0 auto;`;

    return (<div>
        <p className={styles.redText}>Below are a list of Streets Already Visited. Please do not revisit a street again within 6 months.</p>

        <p className={styles.mainText}>Once you decide on a street please text <span className={styles.orangeText}>Keshava Gokulananda Das</span> on <span className={styles.orangeText}>07525 66 1791</span> with the street name so he can update this page. Thank you.</p>
        <BarLoader
            color='red'
            loading={streets.loading}
            css={loadingCss}
        />
        {streetsError && <Alert severity='error'>Error Fetching Streets Data: {streets.error.message}</Alert>}
        {streetsIsDefined && <StreetsTable />}

    </div>)
};

export default connect(mapStateToProps)(Home);
