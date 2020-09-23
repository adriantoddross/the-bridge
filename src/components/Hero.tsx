import React from "react";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import { Image } from "cloudinary-react";

import Paper from "@material-ui/core/Paper";

interface HeroProps {
  cloudinaryImageTitle: string;
  title: string;
  description?: string;
  children?: React.ReactNode;
  objectPosition?: string;
}

function Hero(props: HeroProps) {
  const useStyles = makeStyles((theme) => ({
    root: {
      display: "grid",
      placeItems: "center",
      height: "40vh",
      [theme.breakpoints.up("md")]: {},
    },
    paper: {},
    img: {
      objectFit: "cover",
      objectPosition: props.objectPosition ? props.objectPosition : "bottom",
      height: "40vh",
      width: "100%",
    },
    heroContent: {
      padding: theme.spacing(1.5, 3),
      "& > *": {
        margin: theme.spacing(2),
      },
    },
  }));

  const classes = useStyles();

  return (
    <>
      <Paper
        className={[classes.paper, classes.root].join("")}
        component="section"
        elevation={0}
      >
        <Image
          dpr="auto"
          responsive
          width="auto"
          crop="scale"
          loading="lazy"
          responsiveUseBreakpoints="true"
          publicId={`/the-bridge/${props.cloudinaryImageTitle}`}
          cloudName={process.env.REACT_APP_CLOUDINARY_CLOUD_NAME}
          className={classes.img}
          alt=""
        />
        <div className={classes.heroContent}>
          {" "}
          <Typography variant="h1">{props.title}</Typography>
          <Typography variant="body1">{props.description}</Typography>
          {props.children}
        </div>
      </Paper>
    </>
  );
}

export default Hero;
