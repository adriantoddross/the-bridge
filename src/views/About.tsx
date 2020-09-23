import React from "react";

import Navbar from "../components/Navbar";
import Subscribe from "../components/Subscribe";
import mockData from "../mockData";

function Homepage() {
  return (
    <>
      <Navbar />

      <main>
        <h1>Hello world!</h1>
      </main>

      <footer>
        <Subscribe />
      </footer>
    </>
  );
}

export default Homepage;
