import React from "react";
import Typography from "@material-ui/core/Typography";
import { Link as RouterLink } from "react-router-dom";

import Navbar from "../components/Navbar";
import Subscribe from "../components/Subscribe";
import Hero from "../components/Hero";
import Button from "@material-ui/core/Button";

function Homepage() {
  return (
    <>
      <Navbar />

      <main>
        <Hero
          cloudinaryImageTitle="pexels-uncoveredlens-3620404"
          objectPosition="top"
          title="About Impact Nigeria"
        >
          <Typography variant="h3">
            How might we connect the Nigerian diaspora to Nigerian causes?
          </Typography>

          <Typography variant="body1">
            This was the question we aimed to address with Impact Nigeria. We
            discovered many Nigerians who live outside of Nigeria want to
            support Nigerian nonprofits but were facing multiple barriers. They
            found it difficult to see the results of their donations, sometimes
            not knowing what an organization needs!
          </Typography>

          <Typography variant="body1">
            Impact Nigeria aims to close that gap. We provide a database of
            vetted nonprofits. It clearly states what they need and what the
            donations will be used for.
          </Typography>

          <Button
            to="/contact"
            color="inherit"
            variant="contained"
            component={RouterLink}
          >
            Contact Us
          </Button>

          <Typography variant="h3">Our vetting process is rigorous.</Typography>

          <Typography variant="body1">
            Research, research, research! We review publicly available
            information, paying close attention to financial statements and
            annual reports.
          </Typography>

          <Typography variant="body1">
            We are also working on establishing relationships with each featured
            organization. This will allow us to provide accountability to you,
            the donor. Because we know that gaining your trust will encourage
            you to support the organizations and ultimately make a meaningful
            impact in the lives of Nigerians.
          </Typography>

          <Button
            to="/contact"
            color="inherit"
            variant="contained"
            component={RouterLink}
          >
            Partner With Us!
          </Button>
        </Hero>
      </main>

      <footer>
        <Subscribe />
      </footer>
    </>
  );
}

export default Homepage;
