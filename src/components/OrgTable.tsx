import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";

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

function OrgTable() {
  const classes = useStyles();
  const [orgs] = React.useState([{}, {}, {}]);

  return (
    <section className={classes.root}>
      <Typography variant="h6" component="h2">
        Featured Organizations
      </Typography>
      <ul className={classes.list}>
        {orgs.map((org, index) => {
          return <li className={classes.item}>Hello World!</li>;
        })}
      </ul>
    </section>
  );
}

export default OrgTable;
