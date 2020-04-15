import React from "react";
import { AppBar, Toolbar, Typography, Button, Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { grey, red } from "@material-ui/core/colors";

const useStyles = makeStyles(theme => ({
  appBar: {
    backgroundColor: theme.palette.common.white,
    padding: "1.75% 7% 1.5% 7%"
  },
  buttonDiv: {
    justifyContent: "flex-end"
  },
  navButton: {
    fontWeight: 600,
    fontSize: "0.875rem",
    color: grey[900],
    "&:hover": {
      color: red[800],
      backgroundColor: theme.palette.common.white
    }
  },
  appBarTitle: {
    color: red[800],
    fontSize: "1.875rem",
    fontWeight: 500
  },
  appBarSubtitle: {
    color: grey[800]
  }
}));

const NavBar = () => {
  const styles = useStyles();

  return (
    <AppBar id="navbar-component" position="static" className={styles.appBar}>
      <Toolbar>
        <Grid container>
          <Grid item xs={3} md={3}>
            <img
              id="navbar-image"
              src="http://sankirtan.bhaktivedantamanor.co.uk/wp-content/uploads/2019/12/cropped-Website_Logo-1.jpg"
              alt="Sankirtana Forever Logo"
            />
          </Grid>
          <Grid item xs={9} md={4}>
            <div>
              <Typography
                id="navbar-site-title"
                variant="h1"
                className={styles.appBarTitle}
              >
                Sankirtana Forever
              </Typography>
              <Typography
                id="navbar-site-subtitle"
                variant="body1"
                className={styles.appBarSubtitle}
              >
                Rise Above and Go Beyond [Marathon 2019]
              </Typography>
            </div>
          </Grid>
          <Grid item md={5}>
            <Button
              id="navbar-button-home"
              className={styles.navButton}
              disableFocusRipple
              disableRipple
            >
              Home
            </Button>
            <Button
              id="navbar-button-campaign"
              className={styles.navButton}
              disableFocusRipple
              disableRipple
            >
              Be A Giver Campaign
            </Button>
            <Button
              id="navbar-button-photos"
              className={styles.navButton}
              disableFocusRipple
              disableRipple
            >
              Photos
            </Button>
            <Button
              id="navbar-button-videos"
              className={styles.navButton}
              disableFocusRipple
              disableRipple
            >
              Videos
            </Button>
          </Grid>
        </Grid>
      </Toolbar>
    </AppBar>
  );
};

export default NavBar;
