import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Link from "@material-ui/core/Link";
import { Link as RouterLink } from "react-router-dom";

import { generateCloudinaryURL, generateNeedsIcons } from "../utils/utils";

const useStyles = makeStyles((theme) => ({
  root: {
    padding: theme.spacing(3),
  },
  card: {
    display: "flex",
    height: "auto",
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
    color: "#10844E",
    textTransform: "capitalize",
    overflow: "hidden",
    textOverflow: "ellipsis",
  },
  name: {
    fontWeight: "bold",
    textTransform: "uppercase",
    overflow: "hidden",
    textOverflow: "ellipsis",
  },
  svg: {
    width: "1.35rem",
    height: "auto",
    padding: "0px 0.35rem",
  },
}));

function FeaturedOrg(props: any) {
  const classes = useStyles();

  const featuredOrgURL = generateCloudinaryURL(props.imageTitle);

  const orgId = props.name.replace(/\s/g, "").toLowerCase();
  const orgPage = `/org/${orgId}`;

  const needsIcons = generateNeedsIcons(props.needs, classes);

  return (
    <Link
      to={orgPage}
      color="inherit"
      variant="body1"
      component={RouterLink}
      className={classes.name}
    >
      <Card className={classes.card}>
        <CardMedia
          className={classes.media}
          image={props.imageTitle ? featuredOrgURL : ""}
          title={props.name || "Organization name"}
        />

        <CardContent className={classes.content}>
          <div className={classes.need}>{needsIcons}</div>

          <div>
            <Typography variant="body2" className={classes.cause}>
              {props.category.join(", ") || "Philanthropic cause"}
            </Typography>

            <Typography>{props.name || "Organization name"}</Typography>
          </div>
        </CardContent>
      </Card>
    </Link>
  );
}

export default FeaturedOrg;
