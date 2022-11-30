import React, { useState } from "react";
import FlatwareIcon from "@mui/icons-material/Flatware";
import { IconButton } from "@mui/material";
import SwipeableDrawer from "@mui/material/SwipeableDrawer";
import Divider from "@mui/material/Divider";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import style from './style.module.css'

import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemDecorator from '@mui/material/ListItemIcon';
import Typography from '@mui/material/Typography';

import {
  Nav,
  NavLink,
  Bars,
  NavMenu,
  NavBtn,
  NavBtnLink,
} from "./NavbarElements";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <Nav className={style.nav}>
        <NavLink to="/">
          <h1>Pasta Seatea</h1>
        </NavLink>
        <Bars onClick={() => setOpen(true)} />
        <NavMenu>
          <NavLink to="/about">
            <span>About</span>
          </NavLink>
          <NavLink to="/menu">
            <span>Menu</span>
          </NavLink>
          <NavLink to="/contact">
            <span>Contact</span>
          </NavLink>
        </NavMenu>
        <NavBtn>
          <NavBtnLink to="/myorder">
            <FlatwareIcon />
          </NavBtnLink>
        </NavBtn>

        <SwipeableDrawer
          className={style.drawer}
          anchor="right"
          open={open}
          onOpen={() => setOpen(true)}
          onClose={() => setOpen(false)}
        >
          <div>
            <IconButton  onClick={() => setOpen(false)}>
              <ChevronRightIcon />
              <NavBtnLink to="/myorder">
                <FlatwareIcon />
              </NavBtnLink>
            </IconButton>
          </div>
          <Divider/>

          <div>
            <Typography
              id="decorated-list-demo"
              level="body3"
              textTransform="uppercase"
              fontWeight="bold"
              mb={1}
            >
              <NavLink to="/menu">
                <span>Menu</span>
              </NavLink>
            </Typography>
            <List
              aria-labelledby="decorated-list-demo"
              sx={{ '--List-decorator-size': '32px' }}
            >
              <ListItem>
                <ListItemDecorator>
                  <NavLink to="/pasta">
                    <span className={style.menuItem}>Pasta</span>
                  </NavLink>
                </ListItemDecorator>
              </ListItem>
              <ListItem>
                <ListItemDecorator>
                  <NavLink to="/seafood">
                    <span className={style.menuItem}>Seafood</span>
                  </NavLink>
                  </ListItemDecorator>
              </ListItem>
              <ListItem>
                <ListItemDecorator>
                  <NavLink to="/tea">
                    <span className={style.menuItem}>Tea</span>
                  </NavLink>
                  </ListItemDecorator>
              </ListItem>
              <ListItem>
                <ListItemDecorator>
                  <NavLink to="/frappe">
                    <span className={style.menuItem}>Frappe</span>
                  </NavLink>
                  </ListItemDecorator>
              </ListItem>
              <ListItem>
                <ListItemDecorator>
                  <NavLink to="/drinks">
                    <span className={style.menuItem}>Drinks</span>
                  </NavLink>
                  </ListItemDecorator>
              </ListItem>
            </List>
            <Typography
              id="decorated-list-demo"
              level="body3"
              fontWeight="bold"
              mb={1}
            >
              <NavLink to="/about">
                <span>About</span>
              </NavLink>
            </Typography>
            <Typography
              id="decorated-list-demo"
              level="body3"
              fontWeight="bold"
              mb={1}
            >
              <NavLink to="/contact">
                <span>Contact</span>
              </NavLink>
            </Typography>
          </div>

        </SwipeableDrawer>
      </Nav>
    </>
  );
};

export default Navbar;
