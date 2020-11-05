import React from "react";
import TextField from "@material-ui/core/TextField/TextField";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core";

function ContactForm() {
  const [name, setName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [message, setMessage] = React.useState("");

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

  return (
    <>
      <form noValidate autoComplete="on" className={classes.form}>
        <TextField
          type="text"
          id="sender-name"
          label="Name"
          variant="outlined"
          value={name}
          onChange={handleName}
          required
        />
        <TextField
          type="email"
          id="sender-email"
          label="Email"
          variant="outlined"
          value={email}
          onChange={handleEmail}
          required
        />
        <TextField
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
        >
          Send message
        </Button>
      </form>
    </>
  );
}

export default ContactForm;
