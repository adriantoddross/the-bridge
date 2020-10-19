import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Tooltip from "@material-ui/core/Tooltip";
import Link from "@material-ui/core/Link";
import { Link as RouterLink } from "react-router-dom";

import { generateCloudinaryURL } from "../utils/utils";
import { ReactComponent as MoneyIcon } from "../icons/money.svg";
import { ReactComponent as ItemsIcon } from "../icons/items.svg";
import { ReactComponent as VolunteerIcon } from "../icons/volunteering.svg";

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
    alignSelf: "flex-end",
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

  const needsIcons = props.needs.map((need, index) => {
    switch (need) {
      case "time":
        return (
          <Tooltip
            title="Accepting volunteers"
            className={classes.need}
            key={index}
          >
            <VolunteerIcon className={classes.svg} />
          </Tooltip>
        );

      case "items":
        return (
          <Tooltip title="Accepting items" className={classes.need} key={index}>
            <ItemsIcon className={classes.svg} />
          </Tooltip>
        );

      default:
        return (
          <Tooltip
            title="Accepting donations"
            className={classes.need}
            key={index}
          >
            <MoneyIcon className={classes.svg} />
          </Tooltip>
        );
    }
  });

  return (
    <Card className={classes.card}>
      <CardMedia
        className={classes.media}
        image={props.imageTitle ? featuredOrgURL : ""}
        title={props.name || "Organization name"}
      />

      <CardContent className={classes.content}>
        <div className={classes.need}>{needsIcons}</div>

        <div>
          <Typography variant="body2">
            {props.category || "Philanthropic cause"}
          </Typography>

          <Link
            to={orgPage}
            color="inherit"
            variant="body1"
            component={RouterLink}
            className={classes.name}
          >
            {props.name || "Organization name"}
          </Link>
        </div>
      </CardContent>
    </Card>
  );
}

export default FeaturedOrg;
