import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Link from "@material-ui/core/Link";
import Paper from "@material-ui/core/Paper";

import Navbar from "../components/Navbar";

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
  heroImage: {
    backgroundImage:
      'linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url("https://res.cloudinary.com/adriantoddross/image/upload/v1599842958/Hero_Image_webp.webp");',
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
  },
  heroLink: {},
}));

function Homepage() {
  const classes = useStyles();
  const preventDefault = (event: React.MouseEvent) => event.preventDefault();

  return (
    <>
      <Navbar />

      <main>
        <div className={[classes.heroImage, classes.root].join(" ")} />
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
