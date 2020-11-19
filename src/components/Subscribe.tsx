import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Paper from "@material-ui/core/Paper";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";

import { validEmailRegex } from "../utils/utils";

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
  const [errors, setErrors] = React.useState({
    email: "",
    visible: false,
  });
  const [confirmationMessage, displayConfirmationMessage] = React.useState(
    false
  );

  const handleChange = (event: React.ChangeEvent<{ value: unknown }>) => {
    let formErrors = { ...errors };

    setEmail(event.target.value as string);

    formErrors.email = email.match(validEmailRegex)
      ? ""
      : "Please provide a valid e-mail address.";

    setErrors(formErrors);
  };

  const handleFormSubmission = (e) => {
    e.preventDefault();

    if (errors.email) {
      setErrors({ ...errors, visible: true });
    } else {
      resetForm();
      toggleConfirmationMessage();
    }
  };

  const resetForm = () => {
    setEmail("");
  };

  const toggleConfirmationMessage = (e?) => {
    if (e) e.preventDefault();
    displayConfirmationMessage(!confirmationMessage);
  };

  return (
    <Paper
      className={[classes.root, classes.paper].join(" ")}
      component="section"
      elevation={0}
    >
      {confirmationMessage ? (
        <>
          <Typography variant="h3">You are now subscribed!</Typography>
          <Typography variant="body1">
            You'll be notified of new organizations added to our list, any
            updates to our website, and other ways to support Nigerian
            organizations.
          </Typography>
          <Button
            type="button"
            color="inherit"
            variant="contained"
            onClick={toggleConfirmationMessage}
          >
            OK.
          </Button>
        </>
      ) : (
        <>
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
            onSubmit={handleFormSubmission}
          >
            <TextField
              id="email"
              type="email"
              label="Email"
              variant="outlined"
              value={email}
              onChange={handleChange}
              error={errors.visible && !!errors.email}
              helperText={errors.visible && errors.email}
              required
            />
            <Button variant="contained" type="submit">
              Subscribe
            </Button>
          </form>
        </>
      )}
    </Paper>
  );
}

export default Subscribe;
