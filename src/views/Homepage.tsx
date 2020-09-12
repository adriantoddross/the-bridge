import React from "react";

import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Search from "../components/Search";
import FeaturedOrg from "../components/FeaturedOrg";

function Homepage() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <FeaturedOrg />
        <Search />
      </main>

      <footer>Footer</footer>
    </>
  );
}

export default Homepage;
