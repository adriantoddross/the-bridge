import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Link from "@material-ui/core/Link";
import Avatar from "@material-ui/core/Avatar";
import { deepPurple } from "@material-ui/core/colors";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  link: {
    marginRight: theme.spacing(2),
  },
  purple: {
    color: theme.palette.getContrastText(deepPurple[500]),
    backgroundColor: deepPurple[500],
  },
}));

function Homepage() {
  const classes = useStyles();
  const preventDefault = (event: React.MouseEvent) => event.preventDefault();
  return (
    <>
      <header>
        <AppBar position="static">
          <Toolbar>
            <Link
              href="#"
              onClick={preventDefault}
              color="inherit"
              variant="body1"
              className={classes.link}
            >
              <Avatar className={classes.purple}>TB</Avatar>
            </Link>

            <Typography className={classes.root}>
              <Link
                href="#"
                onClick={preventDefault}
                color="inherit"
                variant="body1"
                className={classes.link}
              >
                Home
              </Link>

              <Link
                href="#"
                onClick={preventDefault}
                color="inherit"
                variant="body1"
                className={classes.link}
              >
                About
              </Link>

              <Link
                href="#"
                onClick={preventDefault}
                color="inherit"
                variant="body1"
                className={classes.link}
              >
                Contact
              </Link>
            </Typography>
          </Toolbar>
        </AppBar>
      </header>
      <main>Main</main>
      <footer>Footer</footer>
    </>
  );
}

export default Homepage;
