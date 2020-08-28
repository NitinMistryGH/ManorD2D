import React from 'react';
import PropTypes from 'prop-types';
import {
    TableBody,
    TableRow,
    TableCell
} from '@material-ui/core';
import {
    format, parseJSON
} from 'date-fns';

const descendingComparator = (a, b, orderBy) => {
    if (b[orderBy] < a[orderBy]) {
        return -1;
    }
    if (b[orderBy] > a[orderBy]) {
        return 1;
    }
    return 0;
}

const getComparator = (order, orderBy) => {
    return order === 'desc'
        ? (a, b) => descendingComparator(a, b, orderBy)
        : (a, b) => -descendingComparator(a, b, orderBy);
}

const stableSort = (array, comparator) => {
    const stabilisedThis = array.map((el, index) => [el, index]);
    stabilisedThis.sort((a, b) => {
        const order = comparator(a[0], b[0]);
        if (order !== 0) return order;
        return a[1] - b[1];
    });
    return stabilisedThis.map((el) => el[0]);
}

const formatDate = date => format(parseJSON(date), 'MMM-yyyy');

const StreetsTableBody = ({ styles, order, orderBy, rowsPerPage, streets, page, emptyRows }) => {

    return (
        <TableBody>
            {stableSort(streets, getComparator(order, orderBy))
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map((row, index) => (
                    <TableRow
                        hover
                        key={`street-${index}`}
                    >
                        <TableCell>{row.postcode}</TableCell>
                        <TableCell>{row.streetName}</TableCell>
                        {/* <TableCell>{formatDate(row.date)}</TableCell> */}
                        {emptyRows > 0 && (
                            <TableRow style={{ height: 53 * emptyRows }}>
                                <TableCell colSpan={6} />
                            </TableRow>
                        )}
                    </TableRow>
                ))
            }
        </TableBody>
    )
}

export default StreetsTableBody;

StreetsTableBody.defaultProps = {};

StreetsTableBody.propTypes = {
}