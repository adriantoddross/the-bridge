import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Paper from "@material-ui/core/Paper";

const useStyles = makeStyles((theme) => ({
  root: {
    padding: theme.spacing(3),
  },
  paper: {
    "& > *": {
      marginTop: theme.spacing(3),
      marginBottom: theme.spacing(3),
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
        Subscribe!
      </Typography>
    </Paper>
  );
}

export default Subscribe;
