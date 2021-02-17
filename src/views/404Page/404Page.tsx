import React from "react";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import { Link as RouterLink } from "react-router-dom";

import Navbar from "../../components/Navbar";
import Subscribe from "../../components/Subscribe";
import ContentBlock from "../../components/ContentBlock";

export default function PageNotFound() {
  return (
    <>
      <Navbar />
      <main>
        <ContentBlock
          cloudinaryImageTitle="pexels-ketut-subiyanto-4560092"
          objectPosition="middle"
          title="404"
          description="Oops! The page you’re looking for doesn’t exist."
        >
          <div>
            <Typography variant="body2">
              The page may have been moved or typed incorrectly.
            </Typography>
            <Button
              to="/"
              color="inherit"
              variant="contained"
              component={RouterLink}
            >
              Go back home
            </Button>
          </div>
        </ContentBlock>
      </main>
      <footer>
        <Subscribe />
      </footer>
    </>
  );
}
