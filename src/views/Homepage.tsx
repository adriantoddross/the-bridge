import React from "react";

import Navbar from "../components/Navbar";
import Hero from "../components/Hero";

function Homepage() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
      </main>

      <footer>Footer</footer>
    </>
  );
}

export default Homepage;
