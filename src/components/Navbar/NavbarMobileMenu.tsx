import React from "react";
import { Menu, MenuItem, Link } from "@material-ui/core";
import { Link as RouterLink } from "react-router-dom";
import Button from "@material-ui/core/Button";
import MenuIcon from "@material-ui/icons/Menu";

function MobileNavLinks() {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event: any) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
      <Button
        aria-controls="simple-menu"
        aria-haspopup="true"
        onClick={handleClick}
        color="inherit"
      >
        <MenuIcon />
        <span className="visually-hidden">Open navigation menu</span>
      </Button>
      <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <MenuItem onClick={handleClose}>
          {" "}
          <Link component={RouterLink} to="/">
            Home
          </Link>
        </MenuItem>

        <MenuItem onClick={handleClose}>
          <Link component={RouterLink} to="/about">
            About
          </Link>
        </MenuItem>

        <MenuItem onClick={handleClose}>
          <Link component={RouterLink} to="/contact">
            Contact
          </Link>
        </MenuItem>
      </Menu>
    </>
  );
}

export default MobileNavLinks;
