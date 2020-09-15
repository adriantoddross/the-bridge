import React from "react";

import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import FeaturedOrgList from "../components/FeaturedOrgList";
import OrgList from "../components/OrgList";
import Subscribe from "../components/Subscribe";

import mockData from "../mockData";

function Homepage() {
  return (
    <>
      <Navbar />

      <main>
        <Hero />
        <FeaturedOrgList />
        <OrgList orgs={mockData}/>
      </main>

      <footer>
        <Subscribe />
      </footer>
    </>
  );
}

export default Homepage;
