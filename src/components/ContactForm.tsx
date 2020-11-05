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
        formErrors.email = value.length
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
    console.log(name, email, message);
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
          error={!!errors.name}
          helperText={errors.name}
        />
        <TextField
          name="email"
          type="email"
          id="sender-email"
          label="Email"
          variant="outlined"
          value={email}
          onChange={handleChange}
          error={!!errors.email}
          helperText={errors.email}
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
          error={!!errors.message}
          helperText={errors.message}
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
