import React from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Breadcrumbs,
  Link,
  Grid,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { red } from "@material-ui/core/colors";

const useStyles = makeStyles((theme) => ({
  appBar: {
    backgroundColor: red[800],
    padding: "5% 7% 4.8% 7%",
  },
  title: {
    letterSpacing: "1px",
    wordWrap: "break-word",
    fontSize: "2rem",
    fontWeight: 500,
  },
  links: {
    color: theme.palette.common.white,
  },
}));

const Banner = ({ currentPage }) => {
  const styles = useStyles();

  return (
    <AppBar id="banner-component" position="relative" className={styles.appBar}>
      <Toolbar disableGutters>
        <Grid container>
          <Grid item md={9}>
            <Typography id="banner-title" variant="h1" className={styles.title}>
              {currentPage.title}
            </Typography>
          </Grid>
          <Grid item md={3}>
            <Breadcrumbs id="banner-breadcrumbs" aria-label="breadcrumb">
              <Link id="banner-breadcrumbs-home" href="/" className={styles.links} underline="none">
                Home
              </Link>
              <Link
                id="banner-breadcrumbs-page"
                href={currentPage.link}
                className={styles.links}
                aria-current="page"
                underline="none"
              >
                {currentPage.breadcrumb}
              </Link>
            </Breadcrumbs>
          </Grid>
        </Grid>
      </Toolbar>
    </AppBar>
  );
};

export default Banner;

Banner.defaultProps = {};
Banner.propTypes = {};
