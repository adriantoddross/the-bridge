import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { useTheme } from "@material-ui/core/styles";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Link from "@material-ui/core/Link";
import { Link as RouterLink } from "react-router-dom";

import Logo from "../../logo.svg";
import mobileLogo from "../../mobileLogo.png";
import MobileNavMenu from "./MobileNavMenu";

const useStyles = makeStyles(() => ({
  root: {},
  toolbar: {
    backgroundColor: "#10844e",
  },
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
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <>
      <AppBar position="static">
        <Toolbar className={classes.toolbar}>
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
                      src={isMobile ? mobileLogo : Logo}
                      alt="Impact Nigeria Logo"
                      className={classes.logo}
                    />
                  </Link>

                  <span className="visually-hidden">Impact Nigeria</span>
                </Typography>
              </li>

              <li className={classes.link}>
                {isMobile ? <MobileNavMenu /> : null}
              </li>
            </ul>
          </nav>
        </Toolbar>
      </AppBar>
    </>
  );
}

export default Navbar;
