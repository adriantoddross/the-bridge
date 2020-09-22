import React from "react";

import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import FeaturedOrgList from "../components/FeaturedOrgList";
import OrgList from "../components/OrgList/OrgList";
import Subscribe from "../components/Subscribe";

import mockData from "../mockData";

function Homepage() {
  return (
    <>
      <Navbar />

      <main>
        <Hero />
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
