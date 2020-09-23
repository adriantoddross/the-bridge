import React from "react";

import Navbar from "../components/Navbar";
import Subscribe from "../components/Subscribe";
import Hero from "../components/Hero";

function Homepage() {
  return (
    <>
      <Navbar />

      <main>
        <Hero
          cloudinaryImageTitle="pexels-uncoveredlens-3620404"
          objectPosition="top"
          title="About The Bridge"
        ></Hero>
      </main>

      <footer>
        <Subscribe />
      </footer>
    </>
  );
}

export default Homepage;
