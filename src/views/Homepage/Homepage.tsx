import React from "react";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";
import { Link as RouterLink } from "react-router-dom";

import Navbar from "../../components/Navbar";
import ContentBlock from "../../components/ContentBlock";
import FeaturedOrgList from "../../components/FeaturedOrgList";
import OrgList from "../../components/OrgList/OrgList";
import Subscribe from "../../components/Subscribe";

import mockData from "../../mockData";

function Homepage() {
  return (
    <>
      <Navbar />

      <main>
        <ContentBlock
          title="Welcome to Impact Nigeria!"
          cloudinaryImageTitle="pexels-tope-a-asokere-4237407"
          description="Making international philanthropy easier by connecting donors with
          social impact organizations across Nigeria."
        >
          <div>
            <Button
              to="/about"
              color="primary"
              variant="contained"
              component={RouterLink}
              fullWidth={true}
            >
              Learn more
            </Button>
          </div>
        </ContentBlock>
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
