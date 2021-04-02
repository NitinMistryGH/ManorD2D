import React from 'react';
import PropTypes from 'prop-types';
import {
    TableBody,
    TableRow,
    TableCell
} from '@material-ui/core';

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

const StreetsTableBody = ({ styles, order, orderBy, rowsPerPage, streets, page }) => {

    return (
        <TableBody>
            {stableSort(streets, getComparator(order, orderBy))
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map((row, index) => (
                    <TableRow
                        key={`street-${index}`}
                        className={styles.rows}
                    >
                        <TableCell className={styles.rowText}>{row.postcode}</TableCell>
                        <TableCell className={styles.rowText}>{row.streetName}</TableCell>
                        <TableCell className={styles.rowText}>{row.lastVisited}</TableCell>
                    </TableRow>
                ))
            }
        </TableBody>
    )
}

export default StreetsTableBody;

StreetsTableBody.defaultProps = {};

StreetsTableBody.propTypes = {
    styles: PropTypes.instanceOf(Object).isRequired,
    order: PropTypes.oneOf(['asc', 'desc']).isRequired,
    orderBy: PropTypes.string.isRequired,
    rowsPerPage: PropTypes.number.isRequired,
    streets: PropTypes.instanceOf(Object).isRequired,
    page: PropTypes.number.isRequired
}