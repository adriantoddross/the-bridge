import React from "react";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField/TextField";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core";

import Navbar from "../components/Navbar";
import Subscribe from "../components/Subscribe";
import ContentBlock from "../components/ContentBlock";

function ContactPage() {
  const useStyles = makeStyles((theme) => ({
    form: {
      display: "flex",
      flexDirection: "column",
    },
  }));

  const classes = useStyles();

  return (
    <>
      <Navbar />
      <main>
        <ContentBlock
          cloudinaryImageTitle=""
          objectPosition=""
          title="Contact Us"
        >
          <section>
            <Typography variant="h3">
              Have a question? Want to partner with us? Send us a message?
            </Typography>
          </section>
          <div>
            <form noValidate autoComplete="off" className={classes.form}>
              <TextField id="sender-name" label="Name" variant="outlined" />
              <TextField id="sender-email" label="Email" variant="outlined" />
              <TextField
                id="sender-message"
                label="Message"
                variant="outlined"
                multiline={true}
                rows={6}
                rowsMax={6}
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
          </div>
        </ContentBlock>
      </main>

      <footer>
        <Subscribe />
      </footer>
    </>
  );
}

export default ContactPage;
