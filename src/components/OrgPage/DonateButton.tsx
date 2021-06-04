import React from "react";
import ReactGA from "react-ga";
import Button from "@material-ui/core/Button";
import { Link } from "@material-ui/core";

export default function DonateButton(props) {
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
      >
        <Button color="primary" variant="contained" fullWidth={true}>
          Donate on Website
        </Button>
      </Link>
    </div>
  );
}
