import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Link from "@material-ui/core/Link";
import Button from "@material-ui/core/Button";
import Logo from "../logo.svg";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import MenuIcon from "@material-ui/icons/Menu";
import { Link as RouterLink } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  root: {},
  nav: {
    width: "100%",
  },
  ul: {
    alignItems: "center",
    display: "flex",
    flexFlow: "row nowrap",
    justifyContent: "space-between",
    padding: 0,
  },
  link: {
    listStyle: "none",
  },
  logo: {
    height: "auto",
    width: "8rem",
  },
}));

function Navbar() {
  const classes = useStyles();

  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event: any) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
      <AppBar position="static">
        <Toolbar>
          <nav className={classes.nav}>
            <ul className={classes.ul}>
              <li className={classes.link}>
                <Typography
                  className={classes.root}
                  variant="body1"
                  component="h1"
                >
                  <Link
                    to="/"
                    component={RouterLink}
                    color="inherit"
                    variant="body1"
                  >
                    <img
                      src={Logo}
                      alt="Impact Nigeria Logo"
                      className={classes.logo}
                    />
                  </Link>

                  <span className="visually-hidden">Impact Nigeria</span>
                </Typography>
              </li>

              <li className={classes.link}>
                <Button
                  aria-controls="simple-menu"
                  aria-haspopup="true"
                  onClick={handleClick}
                  color="inherit"
                >
                  <MenuIcon />
                  <span className="visually-hidden">Open navigation menu</span>
                </Button>
              </li>
            </ul>
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
          </nav>
        </Toolbar>
      </AppBar>
    </>
  );
}

export default Navbar;
