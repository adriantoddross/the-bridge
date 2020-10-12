import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Link } from "@material-ui/core";
import Typography from "@material-ui/core/Typography";

import Navbar from "../components/Navbar";
import Subscribe from "../components/Subscribe";
import ContentBlock from "../components/ContentBlock";
import mockData from "../mockData";

export default function OrgPage(props) {
  let { name } = useParams();
  const [orgData, setOrgData] = useState<any>({});
  const description = orgData?.description?.split("\n");

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
        <ContentBlock
          cloudinaryImageTitle={orgData.cloudinaryImageTitle}
          title={orgData.name}
          objectPosition="middle"
        >
          <Typography variant="body2">{orgData.category}</Typography>
          <div>
            <Typography variant="body1">
              <b>{orgData.needs?.description}</b>
            </Typography>
          </div>
          <div>
            {orgData.impact?.map((impact) => (
              <Typography variant="h6" component="p">
                {impact}
              </Typography>
            ))}
          </div>
          <div>
            {description?.map((paragraph) => (
              <Typography variant="body1">{paragraph}</Typography>
            ))}
          </div>
          <div>
            <Link
              href={
                orgData?.links?.learnMore ||
                orgData?.links?.donate ||
                orgData?.links?.website
              }
              variant="body1"
            >
              {orgData?.links?.title || "Donate to this organization"}
            </Link>
          </div>
        </ContentBlock>
      </main>
      <Subscribe />
    </>
  );
}
