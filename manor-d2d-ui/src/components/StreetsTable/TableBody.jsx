import React from 'react';
import PropTypes from 'prop-types';
import {
    TableBody,
    TableRow,
    TableCell
} from '@material-ui/core';
import {
    parseJson,
    format
} from 'date-fns';

const stableSort = (array, comparator) => {
    const stabilisedThis = array.map((el, index) => [el, index]);
    stabilisedThis.sort((a, b) => {
        const order = comparator(a[0], b[0]);
        if (order !== 0) return order;
        return a[1] - b[1];
    });
    return stabilisedThis.map((el) => el[0]);
}

const formatDate = date => format(parseJson(date), 'MMM-yyyy');

const TableBody = ({ styles, order, orderBy, onRequestSort }) => {

    return (
        <TableBody>
            {stableSort(rows, getComparator(order, orderBy))
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map((row, index) => (
                    <TableRow
                        hover
                        key={row.name}
                    >
                        <TableCell>{row.postcode}</TableCell>
                        <TableCell>{row.streetName}</TableCell>
                        <TableCell>{formatDate(row.date)}</TableCell>
                    </TableRow>
                )
            }

        </TableBody>
    )
}

export default TableBody;

TableBody.defaultProps = {};

TableBody.propTypes = {
}