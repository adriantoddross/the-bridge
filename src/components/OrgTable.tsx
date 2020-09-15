import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Paper from "@material-ui/core/Paper";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";

const useStyles = makeStyles((theme) => ({
  root: {
    padding: theme.spacing(3),
  },
  paper: {
    "& > *": {
      marginTop: theme.spacing(3),
      marginBottom: theme.spacing(3),
    },
  },
}));

function OrgTable(props: any) {
  const classes = useStyles();
  const [orgs] = React.useState(props.tableData || []);

  return (
    <Paper
      className={[classes.root, classes.paper].join(" ")}
      component="section"
      elevation={0}
    >
      <Typography variant="h6" component="h2">
        Featured Organizations
      </Typography>

      <TableContainer component={Paper}>
        <Table aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>
                <Typography variant="body1" component="h3">
                  Name
                </Typography>
              </TableCell>
              <TableCell>
                <Typography variant="body1" component="h3">
                  Category
                </Typography>
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {orgs.map((org: any, index: any) => (
              <TableRow key={index}>
                <TableCell>{org.name}</TableCell>
                <TableCell>{org.category}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Paper>
  );
}

export default OrgTable;
