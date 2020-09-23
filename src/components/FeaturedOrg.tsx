import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Tooltip from "@material-ui/core/Tooltip";
import { Cloudinary } from "cloudinary-core";

import { ReactComponent as MoneyIcon } from "../icons/money.svg";

const useStyles = makeStyles((theme) => ({
  root: {
    padding: theme.spacing(3),
  },
  card: {
    display: "flex",
    height: "18vh",
  },
  media: {
    height: "auto",
    width: "25vh",
  },
  content: {
    display: "flex",
    flexDirection: "column",
    flexWrap: "nowrap",
    justifyContent: "space-between",
    width: "100%",

    "&:last-child": {
      paddingBottom: "8px",
    },
  },

  need: {
    alignSelf: "flex-end",
  },
  cause: {
    textTransform: "capitalize",
    whiteSpace: "nowrap",
    overflow: "hidden",
    textOverflow: "ellipsis",
  },
  name: {
    textTransform: "uppercase",
    whiteSpace: "nowrap",
    overflow: "hidden",
    textOverflow: "ellipsis",
  },
  svg: {
    width: "1.75rem",
    height: "auto",
    padding: "0px 0.25rem",
  },
}));

function FeaturedOrg(props: any) {
  const classes = useStyles();
  const cl = new Cloudinary({
    cloud_name: process.env.REACT_APP_CLOUDINARY_CLOUD_NAME,
    secure: true,
  });
  const cloudinaryURL = cl.url(
    `/the-bridge/${props.imageTitle}` ||
      "/the-bridge/pexels-uncoveredlens-3620343.jpg",
    {
      dpr: "auto",
      width: "auto",
      q_auto: "auto",
      crop: "scale",
      fetch_format: "auto",
    }
  );

  const needsIcons = props.needs.map((need) => {
    switch (need) {
      case "time":
        return (
          <Tooltip title="Accepting volunteers" className={classes.need}>
            <MoneyIcon title="Accepting volunteers" className={classes.svg} />
          </Tooltip>
        );

      case "stuff":
        return (
          <Tooltip title="Accepting items" className={classes.need}>
            <MoneyIcon title="Accepting items" className={classes.svg} />
          </Tooltip>
        );

      default:
        return (
          <Tooltip title="Accepting donations" className={classes.need}>
            <MoneyIcon title="Accepting donations" className={classes.svg} />
          </Tooltip>
        );
    }
  });

  return (
    <Card className={classes.card}>
      <CardMedia
        className={classes.media}
        image={props.imageTitle ? cloudinaryURL : ""}
        title={props.name || "Organization name"}
      />

      <CardContent className={classes.content}>
        <div className={classes.need}>
          {needsIcons}
        </div>

        <div>
          <Typography variant="body2">
            {props.category || "Philanthropic cause"}
          </Typography>

          <Typography variant="body1" component="h3" className={classes.name}>
            {props.name || "Organization name"}
          </Typography>
        </div>
      </CardContent>
    </Card>
  );
}

export default FeaturedOrg;
