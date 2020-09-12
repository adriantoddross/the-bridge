import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Paper from "@material-ui/core/Paper";

const useStyles = makeStyles((theme) => ({
  root: {},
}));

function FeaturedOrg() {
  const classes = useStyles();

  return (
    <>
      <Typography variant="h5" component="h1">
        Featured Organizations
      </Typography>
    </>
  );
}

export default FeaturedOrg;
