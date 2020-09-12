import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import Paper from "@material-ui/core/Paper";

import babatunde200 from "../images/jpg/babatunde-olajide-jcQdBcW7Tmw-unsplash_y5ligb_c_scale,w_200.jpg";
import babatunde372 from "../images/jpg/babatunde-olajide-jcQdBcW7Tmw-unsplash_y5ligb_c_scale,w_372.jpg";
import babatunde501 from "../images/jpg/babatunde-olajide-jcQdBcW7Tmw-unsplash_y5ligb_c_scale,w_501.jpg";
import babatunde611 from "../images/jpg/babatunde-olajide-jcQdBcW7Tmw-unsplash_y5ligb_c_scale,w_611.jpg";
import babatunde709 from "../images/jpg/babatunde-olajide-jcQdBcW7Tmw-unsplash_y5ligb_c_scale,w_709.jpg";
import babatunde800 from "../images/jpg/babatunde-olajide-jcQdBcW7Tmw-unsplash_y5ligb_c_scale,w_800.jpg";
import babatunde887 from "../images/jpg/babatunde-olajide-jcQdBcW7Tmw-unsplash_y5ligb_c_scale,w_887.jpg";
import babatunde971 from "../images/jpg/babatunde-olajide-jcQdBcW7Tmw-unsplash_y5ligb_c_scale,w_971.jpg";
import babatunde1052 from "../images/jpg/babatunde-olajide-jcQdBcW7Tmw-unsplash_y5ligb_c_scale,w_1052.jpg";
import babatunde1133 from "../images/jpg/babatunde-olajide-jcQdBcW7Tmw-unsplash_y5ligb_c_scale,w_1133.jpg";
import babatunde1209 from "../images/jpg/babatunde-olajide-jcQdBcW7Tmw-unsplash_y5ligb_c_scale,w_1209.jpg";
import babatunde1281 from "../images/jpg/babatunde-olajide-jcQdBcW7Tmw-unsplash_y5ligb_c_scale,w_1281.jpg";
import babatunde1358 from "../images/jpg/babatunde-olajide-jcQdBcW7Tmw-unsplash_y5ligb_c_scale,w_1358.jpg";
import babatunde1386 from "../images/jpg/babatunde-olajide-jcQdBcW7Tmw-unsplash_y5ligb_c_scale,w_1386.jpg";
import babatunde1400 from "../images/jpg/babatunde-olajide-jcQdBcW7Tmw-unsplash_y5ligb_c_scale,w_1400.jpg";

import babatunde200webp from "../images/babatunde-olajide-jcQdBcW7Tmw-unsplash_vaymjd_c_scale,w_200.webp";
import babatunde608webp from "../images/babatunde-olajide-jcQdBcW7Tmw-unsplash_vaymjd_c_scale,w_608.webp";
import babatunde875webp from "../images/babatunde-olajide-jcQdBcW7Tmw-unsplash_vaymjd_c_scale,w_875.webp";
import babatunde1147webp from "../images/babatunde-olajide-jcQdBcW7Tmw-unsplash_vaymjd_c_scale,w_1147.webp";
import babatunde1359webp from "../images/babatunde-olajide-jcQdBcW7Tmw-unsplash_vaymjd_c_scale,w_1359.webp";
import babatunde1400webp from "../images/babatunde-olajide-jcQdBcW7Tmw-unsplash_vaymjd_c_scale,w_1400.webp";

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
  heroLink: {},
}));

function Hero() {
  const classes = useStyles();
  const preventDefault = (event: React.MouseEvent) => event.preventDefault();

  return (
    <>
      <picture>
        <source
          type="image/webp"
          className={classes.img}
          sizes="(max-width: 1400px) 100vw, 1400px"
          srcSet={`
              ${babatunde200webp} 200w,
              ${babatunde608webp} 608w,
              ${babatunde875webp} 875w,
              ${babatunde1147webp} 1147w,
              ${babatunde1359webp} 1359w,
              ${babatunde1400webp} 1400w`}
        />

        <img
          className={classes.img}
          sizes="(max-width: 1400px) 100vw, 1400px"
          srcSet={`
              ${babatunde200} 200w,
              ${babatunde372} 372w,
              ${babatunde501} 501w,
              ${babatunde611} 611w,
              ${babatunde709} 709w,
              ${babatunde800} 800w,
              ${babatunde887} 887w,
              ${babatunde971} 971w,
              ${babatunde1052} 1052w,
              ${babatunde1133} 1133w,
              ${babatunde1209} 1209w,
              ${babatunde1281} 1281w,
              ${babatunde1358} 1358w,
              ${babatunde1386} 1386w,
              ${babatunde1400} 1400w`}
          src={babatunde1400}
          alt=""
        />
      </picture>

      <Paper className={classes.paper} component="section" elevation={0}>
        <Typography variant="h5" component="h1">
          Welcome to The Bridge!
        </Typography>

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
          className={classes.heroLink}
        >
          Browse organizations
        </Button>

        <Button
          href="#"
          onClick={preventDefault}
          color="inherit"
          variant="contained"
          component="a"
          className={classes.heroLink}
        >
          Learn more
        </Button>
      </Paper>
    </>
  );
}

export default Hero;
