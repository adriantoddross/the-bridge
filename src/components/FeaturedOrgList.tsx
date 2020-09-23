import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";

import FeaturedOrg from "./FeaturedOrg";

const useStyles = makeStyles((theme) => ({
  root: {
    padding: theme.spacing(3),
  },
  list: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-evenly",
    listStyleType: "none",
    padding: 0,
    textDecoration: "none",
  },
  item: {
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(1),
  },
}));

function FeaturedOrgList(props: any) {
  const classes = useStyles();

  return (
    <section className={classes.root}>
      <Typography variant="h2">Featured Organizations</Typography>
      <ul className={classes.list}>
        {props.data.map((org: any, index) => {
          console.log(`org ${index}:`, org);
          const { name, category, cloudinaryImageTitle, needs } = org;
          return (
            <li className={classes.item} key={`$org-${index}`}>
              <FeaturedOrg
                name={name}
                category={category}
                imageTitle={cloudinaryImageTitle}
                needs={needs.type}
              />
            </li>
          );
        })}
      </ul>
    </section>
  );
}

export default FeaturedOrgList;
