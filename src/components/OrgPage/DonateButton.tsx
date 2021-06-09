import React from "react";
import ReactGA from "react-ga";
import Button from "@material-ui/core/Button";
import { Link } from "@material-ui/core";

export default function DonateButton(props) {
  return (
    <div>
      <Button
        eventLabel={`Clicked donate link for: ${props.orgData.name}`}
        to={
          props.orgData?.links?.learnMore ||
          props.orgData?.links?.donate ||
          props.orgData?.links?.website
        }
        target="_blank"
        rel="noopener"
        component={ReactGA.OutboundLink}
        color="primary"
        variant="contained"
        fullWidth={true}
      >
        Donate on Website
      </Button>
    </div>
  );
}
