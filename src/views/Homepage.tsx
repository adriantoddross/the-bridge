import React from "react";

import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Search from "../components/Search";
import FeaturedOrgList from "../components/FeaturedOrgList";
import OrgTable from "../components/OrgTable";
import Subscribe from "../components/Subscribe";

function Homepage() {
  return (
    <>
      <Navbar />

      <main>
        <Hero />
        <FeaturedOrgList />
        <Search />
        <OrgTable />
      </main>

      <footer>
        <Subscribe />
      </footer>
    </>
  );
}

export default Homepage;
