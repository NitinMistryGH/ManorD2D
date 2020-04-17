import React from 'react';
import {
    AppBar,
    Toolbar
} from '@material-ui/core';
import {makeStyles} from '@material-ui/core/styles';

const  useStyles = makeStyles(theme => ({

}));

const Banner = () => {
  const styles = useStyles();
  return(
      <AppBar>
          <Toolbar />
      </AppBar>
  )

}

export default Banner;

Bannner.defaultProps = {};
Banner.propTypes = {};