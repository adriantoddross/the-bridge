import React from "react";
import { Menu, MenuItem, Link } from "@material-ui/core";
import { Link as RouterLink } from "react-router-dom";

function MobileNavLinks(props) {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <Menu
      id="simple-menu"
      anchorEl={anchorEl}
      keepMounted
      open={Boolean(anchorEl)}
      onClose={props.handleClose}
    >
      <MenuItem onClick={props.handleClose}>
        {" "}
        <Link component={props.RouterLink} to="/">
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
  );
}

export default MobileNavLinks;
