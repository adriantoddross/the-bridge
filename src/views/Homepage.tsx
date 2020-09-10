import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

function Homepage() {
  const classes = useStyles();
  return (
    <>
      <header>
        <AppBar position="static">
          <Toolbar>
            <Typography variant="body1" className={classes.title}>
              Home
            </Typography>

            <Typography variant="body1" className={classes.title}>
              About
            </Typography>

            <Typography variant="body1" className={classes.title}>
              Contact
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
