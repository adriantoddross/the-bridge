import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Link from "@material-ui/core/Link";
import Avatar from "@material-ui/core/Avatar";
import { deepPurple } from "@material-ui/core/colors";

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
  purple: {
    color: theme.palette.getContrastText(deepPurple[500]),
    backgroundColor: deepPurple[500],
  },
}));

function Navbar() {
  const classes = useStyles();
  const preventDefault = (event: React.MouseEvent) => event.preventDefault();
  return (
    <>
      <AppBar position="static">
        <Toolbar>
          <nav>
            <ul className={classes.ul}>
              <li className={classes.link}>
                <Avatar className={classes.purple}>
                  <Typography
                    className={classes.root}
                    variant="body2"
                    component="h1"
                  >
                    <Link
                      href="#"
                      onClick={preventDefault}
                      color="inherit"
                      variant="body1"
                    >
                      TB<span className="visually-hidden">: The Bridge</span>
                    </Link>
                  </Typography>
                </Avatar>
              </li>
              <li className={classes.link}>
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
              </li>
            </ul>
          </nav>
        </Toolbar>
      </AppBar>
    </>
  );
}

export default Navbar;
