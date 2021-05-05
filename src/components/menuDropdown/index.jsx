import React, { useState } from 'react';
import { IconButton, Link, Menu } from '@material-ui/core';
import { NavLink as RouterLink } from 'react-router-dom';
import MenuItem from '@material-ui/core/MenuItem';

const MenuDropdown = ({ links, Label }) => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleMenuClose = () => {
    setAnchorEl(null);
  };
  const isMenuOpen = Boolean(anchorEl);
  return (
    <>
      <IconButton
        edge="end"
        aria-label="account of current user"
        aria-controls="account-menu"
        aria-haspopup="true"
        onClick={handleProfileMenuOpen}
        color="inherit"
      >
        {Label}
      </IconButton>
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
          links.map(({ id, text, to }) => {
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
    </>

    )
}

export default MenuDropdown;
