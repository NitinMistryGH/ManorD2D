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
import PropTypes from "prop-types";
import { Route } from "react-router";
import LinkRouter from "../LinkRouter";

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

const Banner = ({ currentPage, routes }) => {
  const styles = useStyles();

  return (
    <AppBar id="banner-component" position="relative" className={styles.appBar}>
      <Toolbar disableGutters>
        <Route>
          {({ location }) => {
            const pathnames = location.pathname.split("/").filter((x) => x);
            const isHome = pathnames.length;
            return (
              <Grid container>
                <Grid item md={9}>
                  {isHome ? (
                    pathnames.map((value, index) => {
                      const to = `/${pathnames.slice(0, index + 1).join("/")}`;
                      return (
                        <Typography
                          id="banner-title"
                          variant="h1"
                          className={styles.title}
                        >
                          {routes.filter((route) => route.link === to)[0].title}
                        </Typography>
                      );
                    })
                  ) : (
                    <Typography
                      id="banner-title"
                      variant="h1"
                      className={styles.title}
                    >
                      {routes.filter((route) => route.link === "/")[0].title}
                    </Typography>
                  )}
                </Grid>
                <Grid item md={3}>
                  <Breadcrumbs id="banner-breadcrumbs" aria-label="breadcrumb">
                    <LinkRouter
                      id="banner-breadcrumbs-home"
                      to="/"
                      className={styles.links}
                      underline="none"
                    >
                      Home
                    </LinkRouter>
                    {isHome ? (
                      pathnames.map((value, index) => {
                        const to = `/${pathnames
                          .slice(0, index + 1)
                          .join("/")}`;
                        return (
                          <LinkRouter
                            className={styles.links}
                            underline="none"
                            to={to}
                            key={to}
                          >
                            {
                              routes.filter((route) => route.link === to)[0]
                                .breadcrumb
                            }
                          </LinkRouter>
                        );
                      })
                    ) : (
                      <LinkRouter
                        className={styles.links}
                        underline="none"
                        to='/'
                        key='/'
                      >
                        {
                          routes.filter((route) => route.link === "/")[0]
                            .breadcrumb
                        }
                      </LinkRouter>
                    )}
                  </Breadcrumbs>
                </Grid>
              </Grid>
            );
          }}
        </Route>
      </Toolbar>
    </AppBar>
  );
};

export default Banner;

Banner.defaultProps = {};
Banner.propTypes = {
  currentPage: PropTypes.instanceOf(Object).isRequired,
};
