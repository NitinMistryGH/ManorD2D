import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Grid,
  IconButton
} from "@material-ui/core";
import { Menu } from "@material-ui/icons";

import NavBarMenu from "./NavBarMenu";
import useStyles from "./NavBarStyling";

const NavBar = () => {
  const [open, setOpen] = useState(false);
  const styles = useStyles();
  const navOptions = [
    { key: "home", name: "Home" },
    { key: "campaign", name: "Be A Giver Campaign" },
    { key: "photos", name: "Photos" },
    { key: "videos", name: "Videos" }
  ];

  const toggleDrawer = () => {
    setOpen(!open);
  };

  const handleClose = (event) => {
    setOpen(false);
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
                  id={`navbar-button-${item.key}`}
                  key={`navbar-button-${item.key}`}
                  className={styles.navButton}
                  disableFocusRipple
                  disableRipple
                >
                  {item.name}
                </Button>
              ))}
            </Grid>
            <Grid item xs={1} sm={1} className={styles.menuGrid}>
              <IconButton
                id="navbar-menu-button"
                edge="end"
                onClick={toggleDrawer}
                aria-haspopup="true"
                aria-controls="navbar-menu"
                className={styles.menuButton}
              >
                <Menu />
              </IconButton>
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>
        <NavBarMenu
          styles={styles}
          navOptions={navOptions}
          open={open}
          handleClose={handleClose}
        />
    </div>
  );
};

export default NavBar;

NavBar.defaultProps = {}
NavBar.propTypes = {}