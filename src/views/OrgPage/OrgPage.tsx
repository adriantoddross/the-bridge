import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import ReactGA from "react-ga";
import Button from "@material-ui/core/Button/Button";
import { Link } from "@material-ui/core";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import { Link as RouterLink } from "react-router-dom";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";

import mockData from "../../mockData";
import Navbar from "../../components/Navbar";
import Subscribe from "../../components/Subscribe";
import ContentBlock from "../../components/ContentBlock";
import { generateCloudinaryURL, generateNeedsIcons } from "../../utils/utils";
import contactPlaceholderImage from "../../images/org-founder-placeholder.png";

const useStyles = makeStyles((theme) => ({
  contact: {
    textAlign: "center",
  },
  image: {
    width: "100%",
    height: "auto",
  },
  need: {
    alignSelf: "flex-end",
  },
  svg: {
    width: "1.35rem",
    height: "auto",
    padding: "0px 0.35rem",
  },
}));

export default function OrgPage(props) {
  let { name } = useParams();

  const classes = useStyles();

  const [orgData, setOrgData] = useState<any>({});

  const description = orgData?.description?.split("\n");

  const contactImageURL = generateCloudinaryURL(
    orgData?.contact?.image?.cloudinaryImageTitle
  );

  const handleImageError = (e) => {
    e.target.onerror = null;
    e.target.src = contactPlaceholderImage;
  };

  let needsIcons;

  if (orgData?.needs?.type) {
    needsIcons = generateNeedsIcons(orgData?.needs?.type, classes);
  }

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
          <div>
            <Typography variant="body2">{orgData.category}</Typography>
          </div>
          <div>
            {needsIcons}
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
              eventLabel={`Clicked donate link for: ${orgData.name}`}
              to={
                orgData?.links?.learnMore ||
                orgData?.links?.donate ||
                orgData?.links?.website
              }
              target="_blank"
              rel="noopener"
              variant="body1"
              component={ReactGA.OutboundLink}
            >
              {orgData?.links?.title || "Donate to this organization"}
            </Link>
          </div>
          <section className={classes.contact}>
            <img
              className={classes.image}
              src={contactImageURL || contactPlaceholderImage}
              onError={handleImageError}
              alt=""
            />
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
      <footer>
        <Subscribe />
      </footer>
    </>
  );
}
