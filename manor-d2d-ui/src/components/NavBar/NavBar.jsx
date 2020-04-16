import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Grid,
  IconButton,
} from "@material-ui/core";
import { Menu } from "@material-ui/icons";
import { makeStyles } from "@material-ui/core/styles";
import { grey, red } from "@material-ui/core/colors";

import NavBarDrawer from "./NavBarDrawer";

const useStyles = makeStyles((theme) => ({
  appBar: {
    backgroundColor: theme.palette.common.white,
    padding: "1.75% 7% 1.5% 7%",
  },
  buttonGrid: {
    justifyContent: "flex-end",
    [theme.breakpoints.down("md")]: {
      display: "none",
    },
  },
  navButton: {
    fontWeight: 600,
    fontSize: "0.875rem",
    color: grey[900],
    "&:hover": {
      color: red[800],
      backgroundColor: theme.palette.common.white,
    },
  },
  appBarTitle: {
    color: red[800],
    fontSize: "1.875rem",
    fontWeight: 500,
  },
  appBarSubtitle: {
    color: grey[800],
  },
  imageGrid: {
    [theme.breakpoints.down("sm")]: {
      display: "none",
    },
  },
  drawerGrid: {
    [theme.breakpoints.up("md")]: {
      display: "none"
    }
  }
}));

const NavBar = () => {
  const [open, setOpen] = useState(false);
  const styles = useStyles();

  const navOptions = [
    { key: "Home", name: "Home" },
    { key: "Campaign", name: "Be A Giver Campaign" },
    { key: "Photos", name: "Photos" },
    { key: "Videos", name: "Videos" },
  ];

  const toggleDrawer = () => {
    setOpen(!open);
  };

  return (
    <div>
      <AppBar id="navbar-component" position="static" className={styles.appBar}>
        <Toolbar disableGutters>
          <Grid container>
            <Grid item sm={4} md={3} className={styles.imageGrid}>
              <img
                id="navbar-image"
                src="http://sankirtan.bhaktivedantamanor.co.uk/wp-content/uploads/2019/12/cropped-Website_Logo-1.jpg"
                alt="Sankirtana Forever Logo"
              />
            </Grid>
            <Grid item xs={11} sm={7} md={4}>
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
            <Grid item md={5} className={styles.buttonGrid}>
              {navOptions.map((item) => (
                <Button
                  id={`navbar-button-{item.key}`}
                  className={styles.navButton}
                  disableFocusRipple
                  disableRipple
                >
                  {item.name}
                </Button>
              ))}
            </Grid>
            <Grid item xs={1} sm={1} className={styles.drawerGrid}>
              <IconButton onClick={toggleDrawer}>
                <Menu />
              </IconButton>
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>
      <NavBarDrawer styles={styles} navOptions={navOptions} open={open} />
    </div>
  );
};

export default NavBar;
