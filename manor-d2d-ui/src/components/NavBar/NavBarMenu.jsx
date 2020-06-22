import React from "react";
import PropTypes from "prop-types";
import { NavLink } from "react-router-dom";
import { Paper, MenuList, MenuItem, Collapse } from "@material-ui/core";

const NavBarMenu = ({ styles, navOptions, open, handleClose }) => (
  <Paper open={open}>
    <Collapse in={open}>
      <MenuList id="navbar-menu" className={styles.menu}>
        {navOptions.map((item) => (
          <MenuItem
            id={`navbar-menu-${item.key}`}
            key={`navbar-menu-${item.key}`}
            onClick={handleClose}
            className={styles.menuItem}
          >
            <NavLink to={item.link} className={styles.menuItem}>
              {item.key === "home" ? "Home" : item.title}
            </NavLink>
          </MenuItem>
        ))}
      </MenuList>
    </Collapse>
  </Paper>
);

export default NavBarMenu;

NavBarMenu.defaultProps = {};
NavBarMenu.propTypes = {
  styles: PropTypes.instanceOf(Object).isRequired,
  navOptions: PropTypes.instanceOf(Array).isRequired,
  open: PropTypes.bool.isRequired,
  handleClose: PropTypes.func.isRequired,
};
