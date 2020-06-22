import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Container } from "@material-ui/core";
import { grey } from "@material-ui/core/colors";
import PropTypes from "prop-types";
import { Route } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  container: {
    backgroundColor: theme.palette.common.white,
    marginTop: "8%",
    padding: "3.5% 1.5% 3%",
    border: `1px solid ${grey[300]}`,
  },
}));

const PageWrapper = ({ routes }) => {
  const styles = useStyles();

  return (
    <Container
      id="page-wrapper-component"
      className={styles.container}
      maxWidth="md"
      disableGutters
    >
      {routes.map((route) => (
        <Route
          key={route.key}
          path={route.link}
          component={route.component}
          exact
        />
      ))}
    </Container>
  );
};

export default PageWrapper;

PageWrapper.defaultProps = {};
PageWrapper.propTypes = {
  routes: PropTypes.instanceOf(Array).isRequired,
};
