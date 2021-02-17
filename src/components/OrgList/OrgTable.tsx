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
  paper: {
    "& > *": {
      marginTop: theme.spacing(3),
      marginBottom: theme.spacing(3),
    },
  },
  tableHeader: {
    fontWeight: "bold",
    textTransform: "uppercase",
  },
  tableBody: {
    color: "#004B28",
    "& tr:first-child": {
      boxShadow: "inset 0px 20px 20px -8px rgba(0, 77, 41, 0.25)",
    },
    "& tr:last-child": {
      boxShadow: "inset 0px -30px 20px -8px rgba(0, 77, 41, 0.25)",
    },
  },
  tableRow: {
    backgroundColor: "#E2F4EC",
    borderBottom: "0.25em solid white",
  },
  tableCellText: {
    color: "#004B28",
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
      <TableRow key={index} className={classes.tableRow}>
        <TableCell>
          <Link to={orgPage} component={RouterLink}>
            <Typography className={classes.tableCellText}>
              {org.name || "Organization name"}
            </Typography>
          </Link>
        </TableCell>
        <TableCell>
          <Typography className={classes.tableCellText}>
            {org.category}
          </Typography>
        </TableCell>
      </TableRow>
    );
  });

  return (
    <Paper className={classes.paper} component="section" elevation={0}>
      <TableContainer>
        <Table aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>
                <Typography variant="body1" className={classes.tableHeader}>
                  Name
                </Typography>
              </TableCell>
              <TableCell>
                <Typography variant="body1" className={classes.tableHeader}>
                  Category
                </Typography>
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody className={classes.tableBody}>{searchResults}</TableBody>
        </Table>
      </TableContainer>
      {noResults}
    </Paper>
  );
}

export default OrgTable;
