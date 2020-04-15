import React from 'react';
import {
  AppBar,
  Toolbar,
  Typography,
  Button
} from '@material-ui/core';
import {makeStyles} from '@material-ui/core/styles';
import {grey, red} from '@material-ui/core/colors';

const useStyles = makeStyles(theme => ({
  appBar: {
    backgroundColor: theme.palette.common.white
  },
  buttonDiv: {
    justifyContent: 'flex-end',
    display: 'flex'
  },
  navButton: {
    fontWeight: 600,
    fontSize: '0.875rem',
    color: grey[900]
  },
  appBarTitle: {
    color: red[800],
    fontSize: '1.875rem',
    fontWeight: 500
  },
  appBarSubtitle: {
    color: grey[800]
  }
}))

const NavBar = () => {
 const styles = useStyles();

  return (
    <AppBar position="static" className={styles.appBar}>
      <Toolbar>
        <img src='http://sankirtan.bhaktivedantamanor.co.uk/wp-content/uploads/2019/12/cropped-Website_Logo-1.jpg' alt='Sankirtana Forever Logo' />
        <div>
        <Typography variant="h1" className={styles.appBarTitle}>
          Sankirtana Forever
        </Typography>
        <Typography variant="p" className={styles.appBarSubtitle}>
        Rise Above and Go Beyond [Marathon 2019]
        </Typography>
        </div>
        <div className={styles.buttonDiv}>
        <Button className={styles.navButton}>Home</Button>
        <Button className={styles.navButton}>Be A Giver Campaign</Button>
        <Button className={styles.navButton}>Photos</Button>
        <Button className={styles.navButton}>Videos</Button>
        </div>
      </Toolbar>
    </AppBar>
  )
}

export default NavBar;