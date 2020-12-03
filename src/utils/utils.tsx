import React from "react";

import { Cloudinary } from "cloudinary-core";

import Tooltip from "@material-ui/core/Tooltip";
import { ReactComponent as MoneyIcon } from "../icons/money.svg";
import { ReactComponent as ItemsIcon } from "../icons/items.svg";
import { ReactComponent as VolunteerIcon } from "../icons/volunteering.svg";

export function generateCloudinaryURL(imageURL: string) {
  const cl = new Cloudinary({
    cloud_name: process.env.REACT_APP_CLOUDINARY_CLOUD_NAME,
    secure: true,
  });
  const cloudinaryURL = cl.url(`/the-bridge/${imageURL}`, {
    dpr: "auto",
    width: "auto",
    q_auto: "auto",
    crop: "scale",
    fetch_format: "auto",
  });
  return cloudinaryURL;
}

export function generateNeedsIcons(needs: [], classes) {
  const needsIcons = needs.map((need, index) => {
    switch (need) {
      case "time":
        return (
          <Tooltip
            title="Accepting volunteers"
            className={classes.need}
            key={index}
          >
            <VolunteerIcon className={classes.svg} />
          </Tooltip>
        );

      case "items":
        return (
          <Tooltip title="Accepting items" className={classes.need} key={index}>
            <ItemsIcon className={classes.svg} />
          </Tooltip>
        );

      default:
        return (
          <Tooltip
            title="Accepting donations"
            className={classes.need}
            key={index}
          >
            <MoneyIcon className={classes.svg} />
          </Tooltip>
        );
    }
  });
  return needsIcons;
}

export const validEmailRegex = RegExp(
  /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/i
);

export const APIUrl =
  process.env.NODE_ENV === "production"
    ? `${process.env.REACT_APP_API_URL}/subscribe`
    : "http://localhost:4000/subscribe";
