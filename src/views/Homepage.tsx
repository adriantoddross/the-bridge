import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Link from "@material-ui/core/Link";
import Paper from "@material-ui/core/Paper";

import Navbar from "../components/Navbar";

const useStyles = makeStyles((theme) => ({
  root: {},
  heroImage: {
    height: "40vh",
    backgroundImage:
      'linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url("https://res.cloudinary.com/adriantoddross/image/upload/v1599842958/Hero_Image_webp.webp");',
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
  },
  heroText: {},
  heroLink: {},
}));

function Homepage() {
  const classes = useStyles();
  const preventDefault = (event: React.MouseEvent) => event.preventDefault();

  return (
    <>
      <Navbar />

      <main>
        <div className={[classes.heroImage, classes.root].join(" ")}>
          <Paper className={classes.heroText} component="section">
            <Typography variant="h4" component="h1">
              Hello, world!
            </Typography>

            <Typography variant="body1">Description</Typography>

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
        </div>
      </main>

      <footer>Footer</footer>
    </>
  );
}

export default Homepage;
