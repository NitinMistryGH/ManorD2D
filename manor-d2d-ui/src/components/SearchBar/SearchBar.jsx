import React from 'react';
import { TextField } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { blue } from '@material-ui/core/colors';

const useStyles = makeStyles(theme => ({
    root: {
          '& label.Mui-focused': {
            color: blue[500],
          },
          '& .MuiOutlinedInput-root': {
            '&.Mui-focused fieldset': {
              borderColor: blue[500],
            },
    }},
    search: { 
        margin: "1%",
        width: "40%"
    }
}));

const SearchBar = ({handleSearch}) => {
    const styles = useStyles();

    return (<TextField
        onChange={handleSearch}
        id="outlined-search"
        label="Search"
        type="search"
        variant="outlined"
        color="secondary "
        className={styles.search}
        classes={{root: styles.root}} />)
}

export default SearchBar;