import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Paper from "@material-ui/core/Paper";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";

import { validEmailRegex, APIUrl } from "../utils/utils";

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: "#10844E",
    padding: theme.spacing(3),
  },
  paper: {
    "& > *": {
      margin: theme.spacing(1),
    },
  },
  proposition: {
    color: "white",
    textAlign: "center",
  },
  header: {
    fontWeight: "bold",
  },
  form: {
    display: "flex",
    flexDirection: "column",

    "& > *": {
      marginTop: theme.spacing(1),
      marginBottom: theme.spacing(1),
    },
  },
  buttonRoot: {
    backgroundColor: "#e2f4ec",
  },
  label: {
    color: "#10844E",
    fontWeight: "bold",
  },
}));

function Subscribe() {
  const classes = useStyles();
  const [email, setEmail] = React.useState("");
  const [errors, setErrors] = React.useState({
    email: "",
    submissionError: false,
    visible: false,
  });
  const [showConfirmationMessage, displayConfirmationMessage] = React.useState(
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

    if (!email) {
      setErrors({
        ...errors,
        email: "Please provide a valid e-mail address.",
        visible: true,
      });
    } else if (errors.email) {
      setErrors({ ...errors, visible: true });
    } else {
      const formData = { email };

      fetch(APIUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      })
        .then((response) => response.json())
        .then((data) => {
          console.log("Response:", data);

          if (data?.status === "subscribed") {
            resetForm();
            toggleConfirmationMessage();
          } else {
            setErrors({ ...errors, submissionError: true });
            toggleConfirmationMessage();
          }
        })
        .catch((error) => {
          console.error("Error:", error);
        });
    }
  };

  const resetForm = () => {
    setEmail("");
    setErrors({
      email: "",
      submissionError: false,
      visible: false,
    });
  };

  const toggleConfirmationMessage = (e?) => {
    if (e) e.preventDefault();
    displayConfirmationMessage(!showConfirmationMessage);
  };

  const confirmationMessage = errors.submissionError ? (
    <>
      <Typography variant="h3">Sorry, something went wrong.</Typography>
      <Typography variant="body1">
        We weren't able to add you to our mailing list. Please try again.
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
      <Typography variant="h3">
        Check your e-mail to confirm your subscription!
      </Typography>
      <Typography variant="body1">
        After confirming your subscription, you'll be notified of new
        organizations added to our list, any updates to our website, and other
        ways to support Nigerian organizations.
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
  );

  return (
    <Paper
      className={[classes.root, classes.paper].join(" ")}
      component="section"
      elevation={0}
    >
      {showConfirmationMessage ? (
        confirmationMessage
      ) : (
        <>
          <section className={classes.proposition}>
            <Typography
              variant="body1"
              component="h3"
              className={classes.header}
            >
              Sign up to our newsletter!
            </Typography>
            <Typography variant="body2">
              Get notified of new organizations and other updates.
            </Typography>
          </section>
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
            <Button
              variant="contained"
              type="submit"
              classes={{ root: classes.buttonRoot, label: classes.label }}
            >
              Subscribe
            </Button>
          </form>
        </>
      )}
    </Paper>
  );
}

export default Subscribe;
