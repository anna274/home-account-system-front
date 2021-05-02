import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  IconButton,
  Drawer,
  Link,
  MenuItem,
  Menu
} from "@material-ui/core";
import React, { useState, useEffect } from "react";
import { NavLink as RouterLink } from "react-router-dom";
import { NAV_LINKS_ADMIN, PROFILE_NAV_LINKS_ADMIN } from 'consts';
import AccountCircle from '@material-ui/icons/AccountCircle';
import MenuIcon from "@material-ui/icons/Menu";
import useStyles from './styles';

const Navigation = () => {
  const { header, logo, menuButton, toolbar, drawerContainer, active } = useStyles();

  const [state, setState] = useState({
    mobileView: false,
    drawerOpen: false,
  });
  const { mobileView, drawerOpen } = state;
  const [anchorEl, setAnchorEl] = React.useState(null);
  const isMenuOpen = Boolean(anchorEl);
  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleMenuClose = () => {
    setAnchorEl(null);
  };
  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
      id="profile-menu"
      keepMounted
      transformOrigin={{ vertical: 'top', horizontal: 'right' }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
      {
        PROFILE_NAV_LINKS_ADMIN.map(({ id, text, to }) => {
          return (
            <Link
              {...{
                component: RouterLink,
                to,
                color: "inherit",
                style: { textDecoration: "none" },
                key: id,
              }}
            >
              <MenuItem onClick={handleMenuClose}>{text}</MenuItem>
            </Link>
          );
        })
      }
    </Menu>
  );

  useEffect(() => {
    const setResponsiveness = () => {
      return window.innerWidth < 1000
        ? setState((prevState) => ({ ...prevState, mobileView: true }))
        : setState((prevState) => ({ ...prevState, mobileView: false }));
    };

    setResponsiveness();

    window.addEventListener("resize", () => setResponsiveness());
  }, []);

  const displayDesktop = () => {
    return (
      <Toolbar className={toolbar}>
        {logoComponent}
        <div>{getMenuButtons()}</div>
        {profileItem}
      </Toolbar>
    );
  };

  const displayMobile = () => {
    const handleDrawerOpen = () =>
      setState((prevState) => ({ ...prevState, drawerOpen: true }));
    const handleDrawerClose = () =>
      setState((prevState) => ({ ...prevState, drawerOpen: false }));

    return (
      <Toolbar>
        <IconButton
          {...{
            edge: "start",
            color: "inherit",
            "aria-label": "menu",
            "aria-haspopup": "true",
            onClick: handleDrawerOpen,
          }}
        >
          <MenuIcon />
        </IconButton>

        <Drawer
          {...{
            anchor: "left",
            open: drawerOpen,
            onClose: handleDrawerClose,
          }}
        >
          <div className={drawerContainer}>{getDrawerChoices()}</div>
        </Drawer>
        <div className={toolbar}>
          {logoComponent}
          {profileItem}
        </div>
      </Toolbar>
    );
  };

  const getDrawerChoices = () => {
    return NAV_LINKS_ADMIN.map(({ id, text, to }) => {
      return (
        <Link
          {...{
            component: RouterLink,
            to,
            color: "inherit",
            style: { textDecoration: "none" },
            key: id,
            activeStyle: active
          }}
        >
          <MenuItem>{text}</MenuItem>
        </Link>
      );
    });
  };

  const logoComponent = (
    <Typography variant="h6" component="h1" className={logo}>
      Моя бухгалтерия
    </Typography>
  );

  const profileItem = (
    <IconButton
      edge="end"
      aria-label="account of current user"
      aria-controls="account-menu"
      aria-haspopup="true"
      onClick={handleProfileMenuOpen}
      color="inherit"
    >
      <AccountCircle />
    </IconButton>
  );

  const getMenuButtons = () => {
    return NAV_LINKS_ADMIN.map(({ id, text, to }) => {
      return (
        <Button
          {...{
            key: id,
            color: "inherit",
            to,
            component: RouterLink,
            className: menuButton,
          }}
        >
          {text}
        </Button>
      );
    });
  };

  return (
    <header>
      <AppBar className={header}>
        {mobileView ? displayMobile() : displayDesktop()}
      </AppBar>
      {renderMenu}
    </header>
  );
}

export default Navigation;