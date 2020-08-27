import React from 'react';
import PropTypes from 'prop-types';
import {
    TableHead,
    TableRow,
    TableCell,
    TableSortLabel
} from '@material-ui/core';


const TableHeader = ({ styles, order, orderBy, onRequestSort }) => {

    const createSortHandler = property => event => {
        onRequestSort(event, property);
    }

    const headers = [
        { id: 'postcode', numeric: false, disablePadding: false, label: 'Postcode' },
        { id: 'street', numeric: false, disablePadding: false, label: 'Street Name' },
        { id: 'date', numeric: false, disablePadding: false, label: 'Date Visited' }
    ];

    return (
        <TableHead>
            <TableRow>
                {headers.map(headerCell => (
                    <TableCell
                        key={headerCell.id}
                        align={headCell.numeric ? 'right' : 'left'}
                        padding={headCell.disablePadding ? 'none' : 'default'}
                        sortDirection={orderBy === headerCell.id ? order : false}
                    >
                        <TableSortLabel
                            active={orderBy === headerCell.id}
                            direction={orderBy === headerCell.id ? order : 'asc'}
                            onClick={createSortHandler(headerCell.id)}
                        >
                            {headerCell.label}
                            {orderBy === headerCell.id ? (
                                <span className={classes.visuallyHidden}>
                                    {order === 'desc' ? 'sorted descending' : 'sorted ascending'}
                                </span>
                            ) : null}
                        </TableSortLabel>
                    </TableCell>
                ))}
            </TableRow>
        </TableHead>
    )
}

export default TableHeader;

TableHeader.defaultProps = {};

TableHeader.propTypes = {
    styles = PropTypes.instanceOf(Object).isRequired,
    onRequestSort = PropTypes.func.isRequired,
    order = PropTypes.oneOf(['asc', 'desc']).isRequired,
    orderBy: PropTypes.string.isRequired
}