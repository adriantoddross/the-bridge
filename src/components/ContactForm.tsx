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

  const handleName = (event: React.ChangeEvent<{ value: unknown }>) => {
    setName(event.target.value as string);
  };

  const handleEmail = (event: React.ChangeEvent<{ value: unknown }>) => {
    setEmail(event.target.value as string);
  };

  const handleMessage = (event: React.ChangeEvent<{ value: unknown }>) => {
    setMessage(event.target.value as string);
  };

  const handleChange = (
    event: React.ChangeEvent<{ name: string; value: string }>
  ) => {
    event.preventDefault();

    const { name, value } = event.target;
    console.log(event.target);
    console.log("name:", name, "value:", value);
    let formErrors = { ...errors };

    switch (name) {
      case "name":
        setName(value);
        formErrors.name = value.length ? "" : "Please provide your name.";
        break;

      case "email":
        formErrors.email = value.length
          ? ""
          : "Please provide a valid e-mail address.";
        break;

      case "message":
        formErrors.name = value.length ? "" : "Please provide a message.";
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
        />
        <TextField
          name="email"
          type="email"
          id="sender-email"
          label="Email"
          variant="outlined"
          value={email}
          onChange={handleEmail}
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
          onChange={handleMessage}
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
