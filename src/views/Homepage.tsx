import React from "react";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";

import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import FeaturedOrgList from "../components/FeaturedOrgList";
import OrgList from "../components/OrgList/OrgList";
import Subscribe from "../components/Subscribe";

import mockData from "../mockData";

function Homepage() {
  const preventDefault = (event: React.MouseEvent) => event.preventDefault();

  return (
    <>
      <Navbar />

      <main>
        <Hero
          title="Welcome to The Bridge!"
          cloudinaryImageTitle="pexels-tope-a-asokere-4237407"
        >
          <Typography variant="body1">
            Making international philanthropy easier by connecting donors with
            social impact nonprofit organizations across Nigeria.
          </Typography>

          <Button
            href="#"
            onClick={preventDefault}
            color="inherit"
            variant="contained"
            component="a"
          >
            Browse organizations
          </Button>

          <Button
            href="#"
            onClick={preventDefault}
            color="inherit"
            variant="contained"
            component="a"
          >
            Learn more
          </Button>
        </Hero>
        <FeaturedOrgList data={mockData.orgs} />
        <OrgList data={mockData.orgs} />
      </main>

      <footer>
        <Subscribe />
      </footer>
    </>
  );
}

export default Homepage;
