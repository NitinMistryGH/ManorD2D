import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Container } from "@material-ui/core";
import { grey } from "@material-ui/core/colors";

const useStyles = makeStyles((theme) => ({
  container: {
    backgroundColor: theme.palette.common.white,
    marginTop: "8%",
    padding: "3% 1.5%",
    border: "1px solid " + grey[300],
  },
}));

const PageWrapper = ({ children }) => {
  const styles = useStyles();

  return (
    <Container
      id="page-wrapper-component"
      className={styles.container}
      maxWidth="md"
      disableGutters
    >
      {children}
    </Container>
  );
};

export default PageWrapper;

PageWrapper.defaultProps = {};
PageWrapper.propTypes = {};
