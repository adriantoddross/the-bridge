import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Link from "@material-ui/core/Link";

import Navbar from "../components/Navbar";

const useStyles = makeStyles((theme) => ({
  root: {},
  heroImage: {},
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
          <section className={classes.heroText}>
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
          </section>
        </div>
      </main>

      <footer>Footer</footer>
    </>
  );
}

export default Homepage;
