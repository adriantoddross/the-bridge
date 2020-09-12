import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Paper from "@material-ui/core/Paper";

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: "#10844E",
    color: "white",
    padding: theme.spacing(3),
  },
  paper: {
    "& > *": {
      margin: theme.spacing(1),
    },
  },
}));

function Subscribe() {
  const classes = useStyles();
  return (
    <Paper
      className={[classes.root, classes.paper].join(" ")}
      component="section"
      elevation={0}
    >
      <Typography variant="body1" component="h3">
        Sign up to our newsletter!
      </Typography>
      <Typography variant="body2">
        Get notified of new organizations and other updates.
      </Typography>
    </Paper>
  );
}

export default Subscribe;
