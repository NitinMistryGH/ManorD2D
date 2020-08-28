import React, { useState } from 'react';
import { TableContainer, Table, Paper, TablePagination } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import StreetsTableBody from './StreetsTableBody';
import StreetsTableHeader from './StreetsTableHeader';
import { connect } from 'react-redux';

const mapStateToProps = state => ({
    streets: state.streets.data
})

const useStyles = makeStyles(theme => ({

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

    const emptyRows = rowsPerPage - Math.min(rowsPerPage, streets.length - page * rowsPerPage);

    return (
        <Paper>
            <TableContainer>
                <Table>
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
                        emptyRows={emptyRows}
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