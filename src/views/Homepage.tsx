import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Link from "@material-ui/core/Link";
import Paper from "@material-ui/core/Paper";

import Navbar from "../components/Navbar";
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
    padding: theme.spacing(2),

    "& > *": {
      margin: theme.spacing(1),
    },
  },
  img: {},
  heroLink: {},
}));

function Homepage() {
  const classes = useStyles();
  const preventDefault = (event: React.MouseEvent) => event.preventDefault();

  return (
    <>
      <Navbar />

      <main>
        <picture>
          <img
            className={classes.img}
            sizes="(max-width: 1400px) 100vw, 1400px"
            srcSet={`
              ${babatunde200webp} 200w,
              ${babatunde608webp} 608w,
              ${babatunde875webp} 875w,
              ${babatunde1147webp} 1147w,
              ${babatunde1359webp} 1359w,
              ${babatunde1400webp} 1400w`}
            src={babatunde1400webp}
            alt=""
          />
        </picture>

        <Paper className={classes.paper} component="section">
          <Typography variant="h4" component="h1">
            Welcome to The Bridge!
          </Typography>

          <Typography variant="body1">
            Making international philanthropy easier by connecting donors with
            social impact nonprofit organizations across Nigeria.
          </Typography>

          <Link
            href="#"
            onClick={preventDefault}
            color="inherit"
            variant="body1"
            className={classes.heroLink}
          >
            Learn more
          </Link>
        </Paper>
      </main>

      <footer>Footer</footer>
    </>
  );
}

export default Homepage;
