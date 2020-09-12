import React from "react";

import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Search from "../components/Search";
import FeaturedOrgList from "../components/FeaturedOrgList";

function Homepage() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <FeaturedOrgList />
        <Search />
      </main>

      <footer>Footer</footer>
    </>
  );
}

export default Homepage;
