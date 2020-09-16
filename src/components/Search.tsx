import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Paper from "@material-ui/core/Paper";
import TextField from "@material-ui/core/TextField";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
import { Select } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {},
  paper: {
    padding: theme.spacing(1),

    "& > *": {
      margin: theme.spacing(2),
    },
  },
  form: {
    display: "flex",
    flexDirection: "column",

    "& > *": {
      marginTop: theme.spacing(1),
      marginBottom: theme.spacing(1),
    },
  },
}));

function Search(props: any) {
  const classes = useStyles();
  const [query, setQuery] = React.useState("");
  const [type, setType] = React.useState("");
  const [need, setNeed] = React.useState("");

  const searchByQuery = (event: React.ChangeEvent<{ value: unknown }>) => {
    setQuery(event.target.value as string);
    props.searchByQuery(event.target.value as string);
  };

  const searchByType = (event: React.ChangeEvent<{ value: unknown }>) => {
    setType(event.target.value as string);
    props.searchByType(event.target.value as string);
  };

  const searchByNeed = (event: React.ChangeEvent<{ value: unknown }>) => {
    setNeed(event.target.value as string);
    props.searchByNeed(event.target.value as string);
  };

  return (
    <>
      <Paper
        className={[classes.paper, classes.root].join(" ")}
        component="section"
        elevation={0}
      >
        <Typography variant="h1" component="h2">
          Organization list
        </Typography>

        <form noValidate autoComplete="off" className={classes.form}>
          <TextField
            id="search"
            label="Search by name"
            variant="outlined"
            value={query}
            onChange={searchByQuery}
          />

          <FormControl variant="outlined">
            <InputLabel id="select-org-type-label">All types</InputLabel>
            <Select
              labelId="select-org-type-label"
              id="select-org-type"
              value={type}
              onChange={searchByType}
              label="Type"
            >
              <MenuItem value="">
                <em>None</em>
              </MenuItem>
              <MenuItem value="education">Education</MenuItem>
              <MenuItem value="food">Food Insecurity</MenuItem>
              <MenuItem value="youth">Youth Development</MenuItem>
              <MenuItem value="women">Women's Issues</MenuItem>
            </Select>
          </FormControl>

          <FormControl variant="outlined">
            <InputLabel id="select-org-need-label">All needs</InputLabel>
            <Select
              labelId="select-org-need-label"
              id="select-org-need"
              value={need}
              onChange={searchByNeed}
              label="Needs"
            >
              <MenuItem value="">
                <em>None</em>
              </MenuItem>
              <MenuItem value="time">Time</MenuItem>
              <MenuItem value="talent">Talent</MenuItem>
              <MenuItem value="treasure">Treasure</MenuItem>
            </Select>
          </FormControl>
        </form>
      </Paper>
    </>
  );
}

export default Search;
