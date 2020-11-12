import React from "react";
import TextField from "@material-ui/core/TextField/TextField";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core";

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
        const validEmailRegex = RegExp(
          /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/i
        );
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

  const handleFormSubmission = (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    event.preventDefault();

    const allErrors = Object.values(errors);
    const isError = !allErrors
      .slice(0, allErrors.length - 1)
      .every((field) => !field);

    if (isError) {
      setErrors({ ...errors, visible: true });
    } else {
      setErrors({ ...errors, visible: false });
      // Reset the form, then...
      // Send e-mail!
      console.log("Sending e-mail!");
    }
  };

  return (
    <>
      <form noValidate autoComplete="on" className={classes.form}>
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
          onClick={handleFormSubmission}
        >
          Send message
        </Button>
      </form>
    </>
  );
}

export default ContactForm;
