import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  AppBar,
  Toolbar,
  Typography,
  useScrollTrigger,
  Slide,
} from "@material-ui/core";
import { red, grey } from "@material-ui/core/colors";

const useStyles = makeStyles((theme) => ({
  footer: {
    borderTop: "3px solid" + red[800],
    borderBottom: "3px solid" + red[800],
    backgroundColor: grey[900],
    color: theme.palette.common.white,
    top: "auto",
    bottom: 0,
  },
  content: {
    justifyContent: "center",
  },
}));

const Footer = () => {
  const styles = useStyles();
  const scrollTrigger = useScrollTrigger();

  return (
    <Slide direction="up" in={scrollTrigger} id="footer-slide">
      <AppBar
        position="absolute"
        className={styles.footer}
        id="footer-component"
      >
        <Toolbar className={styles.content}>
          <Typography
            variant="body1"
            id="footer-text"
            data-testid="footer-text"
          >
            | Founder Acharya: A.C. Bhaktivedanta Swami Prabhupada |
          </Typography>
        </Toolbar>
      </AppBar>
    </Slide>
  );
};

export default Footer;

Footer.defaultProps = {}
Footer.propTypes = {}