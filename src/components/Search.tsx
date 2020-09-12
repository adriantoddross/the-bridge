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

function Search() {
  const classes = useStyles();
  const [type, setType] = React.useState("");
  const handleChange = (event: React.ChangeEvent<{ value: unknown }>) => {
    setType(event.target.value as string);
  };

  return (
    <>
      <Paper
        className={[classes.paper, classes.root].join(" ")}
        component="section"
        elevation={0}
      >
        <Typography variant="h6" component="h2">
          Organization list
        </Typography>

        <form noValidate autoComplete="off" className={classes.form}>
          <TextField id="search" label="Search by name" variant="outlined" />

          <FormControl variant="outlined">
            <InputLabel id="demo-simple-select-outlined-label">
              All types
            </InputLabel>
            <Select
              labelId="demo-simple-select-outlined-label"
              id="demo-simple-select-outlined"
              value={type}
              onChange={handleChange}
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
            <InputLabel id="demo-simple-select-outlined-label">
              All needs
            </InputLabel>
            <Select
              labelId="demo-simple-select-outlined-label"
              id="demo-simple-select-outlined"
              value={type}
              onChange={handleChange}
              label="Type"
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
