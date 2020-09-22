import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import MonetizationOnIcon from "@material-ui/icons/MonetizationOn";
import { Cloudinary } from "cloudinary-core";

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
    textAlign: "right",
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

  return (
    <Card className={classes.card}>
      <CardMedia
        className={classes.media}
        image={props.imageTitle ? cloudinaryURL : ""}
        title={props.name || "Organization name"}
      />

      <CardContent className={classes.content}>
        <Typography variant="body1" className={classes.need}>
          <span className="visually-hidden">Accepting donations</span>
          <MonetizationOnIcon />
        </Typography>

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
