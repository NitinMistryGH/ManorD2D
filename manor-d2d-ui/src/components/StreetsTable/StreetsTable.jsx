import React, { useState } from 'react';
import { TableContainer, Table, Paper, TablePagination } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { blue, grey } from '@material-ui/core/colors';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import StreetsTableBody from './StreetsTableBody';
import StreetsTableHeader from './StreetsTableHeader';


const mapStateToProps = state => ({
    streets: state.streets.data
})

const useStyles = makeStyles(theme => ({
    rows: {
        '&:nth-of-type(odd)': {
            backgroundColor: theme.palette.action.hover,
        },
    },
    header: {
        backgroundColor: blue[50],

    },
    rowText: {
        color: grey[700],
        fontWeight: 500,
        fontSize: "0.938rem"
    },
    headerText: {
        color: grey[700],
        fontWeight: 'bold',
        fontSize: '0.938rem',
    },
}))

const StreetsTable = ({ streets }) => {
    const styles = useStyles();
    const [order, setOrder] = useState('asc');
    const [orderBy, setOrderBy] = useState('postcode');
    const [page, setPage] = useState(0);
    const [rowsPerPage, setRowsPerPage] = useState(10);

    const handleRequestSort = (event, property) => {
        const isAsc = orderBy === property && order === 'asc';
        setOrder(isAsc ? 'desc' : 'asc');
        setOrderBy(property);
    };

    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(parseInt(event.target.value, 10));
        setPage(0);
    };

    return (
        <Paper>
            <TableContainer>
                <Table id="streets-table">
                    <StreetsTableHeader
                        styles={styles}
                        order={order}
                        orderBy={orderBy}
                        onRequestSort={handleRequestSort}
                    />
                    <StreetsTableBody
                        page={page}
                        streets={streets}
                        styles={styles}
                        order={order}
                        orderBy={orderBy}
                        rowsPerPage={rowsPerPage}
                    />
                </Table>
            </TableContainer>
            <TablePagination
                rowsPerPageOptions={[10, 25, 50, 100]}
                component="div"
                count={streets.length}
                rowsPerPage={rowsPerPage}
                page={page}
                onChangePage={handleChangePage}
                onChangeRowsPerPage={handleChangeRowsPerPage}
            />
        </Paper>
    )
}

export default connect(mapStateToProps)(StreetsTable);

StreetsTable.defaultProps = {};
StreetsTable.propTypes = {
    streets: PropTypes.instanceOf(Object).isRequired
};