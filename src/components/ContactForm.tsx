import React from "react";
import emailjs from "emailjs-com";
import TextField from "@material-ui/core/TextField/TextField";
import Button from "@material-ui/core/Button";
import { makeStyles, Typography } from "@material-ui/core";

import { validEmailRegex } from "../utils/utils";

function ContactForm() {
  const [name, setName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [message, setMessage] = React.useState("");
  const [errors, setErrors] = React.useState({
    name: "",
    email: "",
    message: "",
    visible: false,
  });
  const [confirmationMessage, displayConfirmationMessage] = React.useState(
    false
  );

  const useStyles = makeStyles((theme) => ({
    form: {
      display: "flex",
      flexDirection: "column",
    },
  }));

  const classes = useStyles();

  const handleChange = (
    event: React.ChangeEvent<{ name: string; value: string }>
  ) => {
    event.preventDefault();

    const { name, value } = event.target;
    let formErrors = { ...errors };

    switch (name) {
      case "name":
        setName(value);
        formErrors.name = value.length ? "" : "Please provide your name.";
        break;

      case "email":
        setEmail(value);
        formErrors.email = value.match(validEmailRegex)
          ? ""
          : "Please provide a valid e-mail address.";
        break;

      case "message":
        setMessage(value);
        formErrors.message = value.length ? "" : "Please provide a message.";
        break;

      default:
        break;
    }

    setErrors(formErrors);
  };

  const handleFormSubmission = (event) => {
    event.preventDefault();

    const allErrors = Object.values(errors);
    const isError = !allErrors
      .slice(0, allErrors.length - 1)
      .every((field) => !field);

    if (isError) {
      setErrors({ ...errors, visible: true });
    } else {
      resetForm();
      toggleConfirmationMessage();

      const templateParams = {
        to_name: "info@impactnigeria.org",
        from_name: name,
        from_email: email,
        message,
        reply_to: email,
      };

      emailjs
        .send(
          `${process.env.REACT_APP_EMAILJS_SERVICE_ID}`,
          `${process.env.REACT_APP_EMAILJS_TEMPLATE_ID}`,
          templateParams,
          `${process.env.REACT_APP_EMAILJS_USER_ID}`
        )
        .then(
          (result) => {
            console.log(result.text);
          },
          (error) => {
            console.warn(error.text);
          }
        );
    }
  };

  const resetForm = () => {
    setErrors({ ...errors, visible: false });
    setName("");
    setEmail("");
    setMessage("");
  };

  const toggleConfirmationMessage = (e?) => {
    if (e) e.preventDefault();
    displayConfirmationMessage(!confirmationMessage);
  };

  return (
    <>
      {confirmationMessage ? (
        <>
          <Typography variant="body1">
            Thank you for your message! We'll get to you within 3-5 business
            days with a reply.
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
        <form
          noValidate
          autoComplete="on"
          className={classes.form}
          onSubmit={handleFormSubmission}
        >
          <TextField
            name="name"
            type="text"
            id="sender-name"
            label="Name"
            variant="outlined"
            value={name}
            onChange={handleChange}
            required
            error={errors.visible && !!errors.name}
            helperText={errors.visible && errors.name}
          />
          <TextField
            name="email"
            type="email"
            id="sender-email"
            label="Email"
            variant="outlined"
            value={email}
            onChange={handleChange}
            error={errors.visible && !!errors.email}
            helperText={errors.visible && errors.email}
            required
          />
          <TextField
            name="message"
            type="text"
            id="sender-message"
            label="Message"
            variant="outlined"
            multiline={true}
            rows={6}
            rowsMax={6}
            value={message}
            onChange={handleChange}
            error={errors.visible && !!errors.message}
            helperText={errors.visible && errors.message}
            required
          />
          <Button
            type="submit"
            value="submit"
            color="inherit"
            variant="contained"
          >
            Send message
          </Button>
        </form>
      )}
    </>
  );
}

export default ContactForm;
