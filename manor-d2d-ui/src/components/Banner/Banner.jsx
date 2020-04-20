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
    <AppBar position="relative" className={styles.appBar}>
      <Toolbar disableGutters>
        <Grid container>
          <Grid item md={9}>
            <Typography variant="h1" className={styles.title}>
              {currentPage.title}
            </Typography>
          </Grid>
          <Grid item md={3}>
            <Breadcrumbs aria-label="breadcrumb">
              <Link href="/" className={styles.links} underline="none">
                Home
              </Link>
              <Link
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
