import React from "react";
import Typography from "@material-ui/core/Typography";

import Navbar from "../components/Navbar";
import Subscribe from "../components/Subscribe";
import ContentBlock from "../components/ContentBlock";

function ContactPage() {
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
        </ContentBlock>
      </main>

      <footer>
        <Subscribe />
      </footer>
    </>
  );
}

export default ContactPage;
