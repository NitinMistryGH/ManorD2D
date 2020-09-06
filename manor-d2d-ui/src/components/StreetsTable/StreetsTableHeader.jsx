import React from 'react';
import PropTypes from 'prop-types';
import {
    TableHead,
    TableRow,
    TableCell,
    TableSortLabel
} from '@material-ui/core';


const StreetsTableHeader = ({ styles, order, orderBy, onRequestSort }) => {

    const createSortHandler = property => event => {
        onRequestSort(event, property);
    }

    const headers = [
        { id: 'postcode', numeric: false, disablePadding: false, label: 'Postcode' },
        { id: 'streetName', numeric: false, disablePadding: false, label: 'Street Name' },
        { id: 'lastVisited', numeric: false, disablePadding: false, label: 'Date Visited' }
    ];

    return (
        <TableHead className={styles.header}>
            <TableRow>
                {headers.map(headerCell => (
                    <TableCell
                        key={headerCell.id}
                        align={headerCell.numeric ? 'right' : 'left'}
                        padding={headerCell.disablePadding ? 'none' : 'default'}
                        sortDirection={orderBy === headerCell.id ? order : false}
                        className={styles.headerText}
                    >
                        <TableSortLabel
                            active={orderBy === headerCell.id}
                            direction={orderBy === headerCell.id ? order : 'asc'}
                            onClick={createSortHandler(headerCell.id)}
                        >
                            {headerCell.label}
                        </TableSortLabel>
                    </TableCell>
                ))}
            </TableRow>
        </TableHead>
    )
}

export default StreetsTableHeader;

StreetsTableHeader.defaultProps = {};

StreetsTableHeader.propTypes = {
    styles: PropTypes.instanceOf(Object).isRequired,
    onRequestSort: PropTypes.func.isRequired,
    order: PropTypes.oneOf(['asc', 'desc']).isRequired,
    orderBy: PropTypes.string.isRequired
}