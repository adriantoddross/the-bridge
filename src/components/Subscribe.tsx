import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Paper from "@material-ui/core/Paper";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles((theme) => ({
  root: {
    // backgroundColor: "#10844E",
    // color: "white",
    padding: theme.spacing(3),
  },
  paper: {
    "& > *": {
      margin: theme.spacing(1),
    },
  },
  form: {
    display: "flex",
    flexDirection: "column",

    "& > *": {
      marginTop: theme.spacing(1),
      marginBottom: theme.spacing(1),
    },
  },
}));

function Subscribe() {
  const classes = useStyles();
  const [email, setEmail] = React.useState("");
  const handleChange = (event: React.ChangeEvent<{ value: unknown }>) => {
    setEmail(event.target.value as string);
  };
  const preventDefault = (event: React.MouseEvent) => event.preventDefault();

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
      <form
        id="subscribe"
        noValidate
        autoComplete="off"
        className={classes.form}
      >
        <TextField
          id="email"
          type="email"
          label="Email"
          variant="outlined"
          value={email}
          onChange={handleChange}
        />
        <Button
          variant="contained"
          type="submit"
          form="subscribe"
          value={email}
          onClick={preventDefault}
        >
          Subscribe
        </Button>
      </form>
    </Paper>
  );
}

export default Subscribe;
