import React from "react";
import ReactGA from "react-ga";
import { Link } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(() => ({
  link: {
    fontStyle: "italic",
    textDecoration: "underline",
  },
}));

export default function DonateButton(props) {
  const classes = useStyles();

  return (
    <div>
      <Link
        eventLabel={`Clicked donate link for: ${props.orgData.name}`}
        to={
          props.orgData?.links?.learnMore ||
          props.orgData?.links?.donate ||
          props.orgData?.links?.website
        }
        target="_blank"
        rel="noopener"
        variant="body1"
        component={ReactGA.OutboundLink}
        className={classes.link}
      >
        {props.orgData?.links?.title || "Donate on Website"}
      </Link>
    </div>
  );
}
