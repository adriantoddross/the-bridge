import React from "react";

import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Search from "../components/Search";

function Homepage() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Search />
      </main>

      <footer>Footer</footer>
    </>
  );
}

export default Homepage;
