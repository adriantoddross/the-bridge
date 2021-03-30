import React from "react";
import { makeStyles, Typography } from "@material-ui/core";

import Navbar from "../../components/Navbar";
import Subscribe from "../../components/Subscribe";
import ContentBlock from "../../components/ContentBlock";
import ContactForm from "../../components/ContactForm";

const useStyles = makeStyles((theme) => ({
  highlight: {
    color: "#10844e",
  },
}));

function ContactPage() {
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
            <Typography
              variant="h1"
              component="h2"
              className={classes.highlight}
            >
              Have a question? Want to partner with us? Send us a message?
            </Typography>
          </section>
          <div>
            <ContactForm />
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
