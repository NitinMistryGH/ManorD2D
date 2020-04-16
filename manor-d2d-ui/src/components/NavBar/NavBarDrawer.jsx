import React from "react";
import { Drawer, List, ListItem, ListItemText } from "@material-ui/core";

const NavBarDrawer = ({ styles, navOptions, open }) => (
  <Drawer open={open}>
    <List>
        {navOptions.map(item => (
            <ListItem id={`navbar-menu-{item.key}`} key={`navbar-menu-{item.key}`}>
                <ListItemText primary={item.name}/>
            </ListItem>
        ))}
    </List>
  </Drawer>
);

export default NavBarDrawer;
