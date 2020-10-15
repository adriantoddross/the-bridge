import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Button from "@material-ui/core/Button/Button";
import { Link } from "@material-ui/core";
import Typography from "@material-ui/core/Typography";
import { Cloudinary } from "cloudinary-core";
import { makeStyles } from "@material-ui/core/styles";
import { Link as RouterLink } from "react-router-dom";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";

import Navbar from "../components/Navbar";
import Subscribe from "../components/Subscribe";
import ContentBlock from "../components/ContentBlock";
import mockData from "../mockData";

const useStyles = makeStyles((theme) => ({
  contact: {
    textAlign: "center",
  },
  image: {
    width: "100%",
    height: "auto",
  },
}));

export default function OrgPage(props) {
  let { name } = useParams();

  const classes = useStyles();

  const [orgData, setOrgData] = useState<any>({});

  const description = orgData?.description?.split("\n");

  const cl = new Cloudinary({
    cloud_name: process.env.REACT_APP_CLOUDINARY_CLOUD_NAME,
    secure: true,
  });
  const cloudinaryURL = cl.url(
    `/the-bridge/${orgData?.contact?.image?.cloudinaryImageTitle}` ||
      "/the-bridge/pexels-uncoveredlens-3620343.jpg",
    {
      dpr: "auto",
      width: "auto",
      q_auto: "auto",
      crop: "scale",
      fetch_format: "auto",
    }
  );

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
            {orgData.impact?.map((impact, index) => (
              <Typography key={impact[0] + index} variant="h6" component="p">
                {impact}
              </Typography>
            ))}
          </div>
          <div>
            {description?.map((paragraph, index) => (
              <Typography key={paragraph[0] + index} variant="body1">
                {paragraph}
              </Typography>
            ))}
          </div>
          <div>
            <Link
              href={
                orgData?.links?.learnMore ||
                orgData?.links?.donate ||
                orgData?.links?.website
              }
              target="_blank"
              rel="noopener"
              variant="body1"
            >
              {orgData?.links?.title || "Donate to this organization"}
            </Link>
          </div>
          <section className={classes.contact}>
            <img className={classes.image} src={cloudinaryURL} alt="" />
            <b>
              <Typography variant="h3">{orgData?.contact?.name}</Typography>
            </b>
            <Typography variant="body1">{orgData?.contact?.role}</Typography>
            <Link href={`mailto:${orgData?.contact?.email || ""}`}>
              <Typography variant="body2">
                {orgData?.contact?.email || ""}
              </Typography>
            </Link>
          </section>
          <div>
            <Button
              to="/#organizations"
              color="inherit"
              variant="contained"
              component={RouterLink}
              startIcon={<ArrowBackIcon />}
            >
              Back to organizations list
            </Button>
          </div>
        </ContentBlock>
      </main>
      <Subscribe />
    </>
  );
}
