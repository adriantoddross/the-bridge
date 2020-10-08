import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
// import Typography from "@material-ui/core/Typography";

import Navbar from "../components/Navbar";
import Subscribe from "../components/Subscribe";
// import ContentBlock from "../components/ContentBlock";
import mockData from "../mockData";

export default function OrgPage(props) {
  let { name } = useParams();
  const [orgData, setOrgData] = useState({});

  useEffect(() => {
    const org = mockData.orgs.find(
      (org) => org.name.replace(/\s/g, "").toLowerCase() === name
    );

    if (org) setOrgData(org);
  }, [name, orgData]);

  return (
    <>
      <Navbar />
      <main>
        <h1>Hello world!</h1>
      </main>
      <Subscribe />
    </>
  );
}
