import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import Paper from "@material-ui/core/Paper";
import { Image } from "cloudinary-react";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "grid",
    placeItems: "center",
    height: "40vh",
    [theme.breakpoints.up("md")]: {},
  },
  paper: {
    padding: theme.spacing(1),

    "& > *": {
      margin: theme.spacing(2),
    },
  },
  img: {
    objectFit: "cover",
    objectPosition: "bottom",
    height: "40vh",
    width: "100%",
  },
}));

function Hero() {
  const classes = useStyles();
  const preventDefault = (event: React.MouseEvent) => event.preventDefault();

  return (
    <>
      <Image
        dpr="auto"
        responsive
        width="auto"
        crop="scale"
        loading="lazy"
        responsiveUseBreakpoints="true"
        publicId="/the-bridge/pexels-tope-a-asokere-4237407"
        cloudName={process.env.REACT_APP_CLOUDINARY_CLOUD_NAME}
        className={classes.img}
      />

      <Paper className={classes.paper} component="section" elevation={0}>
        <Typography variant="h1">Welcome to The Bridge!</Typography>

        <Typography variant="body1">
          Making international philanthropy easier by connecting donors with
          social impact nonprofit organizations across Nigeria.
        </Typography>

        <Button
          href="#"
          onClick={preventDefault}
          color="inherit"
          variant="contained"
          component="a"
        >
          Browse organizations
        </Button>

        <Button
          href="#"
          onClick={preventDefault}
          color="inherit"
          variant="contained"
          component="a"
        >
          Learn more
        </Button>
      </Paper>
    </>
  );
}

export default Hero;
