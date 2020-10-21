import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Paper from "@material-ui/core/Paper";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Link from "@material-ui/core/Link";
import { Link as RouterLink } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  root: {
    padding: theme.spacing(0, 3),
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
  const [tableData, setTableData] = useState([]);

  useEffect(() => {
    if (props.tableData) {
      setTableData(props.tableData);
    }
  }, [props.tableData]);

  const noResults = props.tableData.length ? (
    ""
  ) : (
    <>
      <Typography variant="h3">No organizations found</Typography>
      <Typography variant="body1">Try another search term</Typography>
    </>
  );

  const searchResults = tableData.map((org: any, index: any) => {
    let orgId: string = "";
    let orgPage: string = "";

    if (org.name) {
      orgId = org.name.replace(/\s/g, "").toLowerCase();
      orgPage = `/org/${orgId}`;
    }
    return (
      <TableRow key={index}>
        <TableCell>
          <Link to={orgPage} component={RouterLink}>
            {org.name || "Organization name"}
          </Link>
        </TableCell>
        <TableCell>{org.category}</TableCell>
      </TableRow>
    );
  });

  return (
    <Paper
      className={[classes.root, classes.paper].join(" ")}
      component="section"
      elevation={0}
    >
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
          <TableBody>{searchResults}</TableBody>
        </Table>
      </TableContainer>
      {noResults}
    </Paper>
  );
}

export default OrgTable;
