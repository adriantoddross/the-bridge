import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Link from "@material-ui/core/Link";
import Button from "@material-ui/core/Button";
import Logo from "../logo.svg";
// import Menu from "@material-ui/core/Menu";
// import MenuItem from "@material-ui/core/MenuItem";
import MenuIcon from "@material-ui/icons/Menu";

const useStyles = makeStyles((theme) => ({
  root: {},
  ul: {
    alignItems: "center",
    display: "flex",
    flexFlow: "row nowrap",
  },
  link: {
    marginRight: theme.spacing(2),
    listStyle: "none",
    justifyContent: "center",
    alignItems: "center",
  },
  logo: {
    height: "auto",
    width: "100%",
  },
}));

function Navbar() {
  const classes = useStyles();
  const preventDefault = (event: React.MouseEvent) => event.preventDefault();

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
          <nav>
            <ul className={classes.ul}>
              <li className={classes.link}>
                <Typography
                  className={classes.root}
                  variant="body1"
                  component="h1"
                >
                  <Link
                    href="#"
                    onClick={preventDefault}
                    color="inherit"
                    variant="body1"
                  >
                    <img
                      src={Logo}
                      alt="Logo for The Bridge"
                      className={classes.logo}
                    />
                    <span className="visually-hidden">The Bridge</span>
                  </Link>
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

              {/* <li className={classes.link}>
                <Link
                  href="#"
                  onClick={preventDefault}
                  color="inherit"
                  variant="body1"
                >
                  Home
                </Link>
              </li>

              <li className={classes.link}>
                <Link
                  href="#"
                  onClick={preventDefault}
                  color="inherit"
                  variant="body1"
                >
                  About
                </Link>
              </li>

              <li className={classes.link}>
                <Link
                  href="#"
                  onClick={preventDefault}
                  color="inherit"
                  variant="body1"
                >
                  Contact
                </Link>
              </li> */}
            </ul>
          </nav>
        </Toolbar>
      </AppBar>
    </>
  );
}

export default Navbar;
