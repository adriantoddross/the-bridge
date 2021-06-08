import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
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
import DonateLink from "../../components/OrgPage/DonateLink";
import DonateButton from "../../components/OrgPage/DonateButton";

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
  category: {
    color: "#10844E",
  },
  largeText: {
    fontSize: "1.5em",
  },
  bold: {
    fontWeight: "bold",
  },
  link: {
    fontStyle: "italic",
    textDecoration: "underline",
  },
  button: {
    textTransform: "uppercase",
    width: "100%",
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
            <Typography variant="body2" className={classes.category}>
              {orgData.category && orgData.category.join(", ")}
            </Typography>
          </div>
          <div>
            {needsIcons}
            <Typography variant="body1">
              <b>{orgData.needs?.description}</b>
            </Typography>
          </div>
          <div>
            {orgData.impact?.map((impact, index) => (
              <Typography
                key={impact[0] + index}
                variant="body1"
                className={classes.largeText}
              >
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
            {!!orgData?.links?.title ? (
              <DonateLink orgData={orgData} />
            ) : (
              <DonateButton orgData={orgData} />
            )}
          </div>
          <section className={classes.contact}>
            <img
              className={classes.image}
              src={contactImageURL || contactPlaceholderImage}
              onError={handleImageError}
              alt=""
            />
            <b>
              <Typography
                variant="body1"
                className={[classes.largeText, classes.bold].join(" ")}
              >
                {orgData?.contact?.name}
              </Typography>
            </b>
            <Typography variant="body1" className={classes.largeText}>
              {orgData?.contact?.role}
            </Typography>
            <Link
              href={`mailto:${orgData?.contact?.email || ""}`}
              className={classes.link}
              variant="body1"
            >
              {orgData?.contact?.email || ""}
            </Link>
          </section>
          <div>
            <Button
              to="/#organizations"
              color="primary"
              variant="contained"
              component={RouterLink}
              startIcon={<ArrowBackIcon />}
              className={classes.button}
            >
              Back to nonprofits
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
