import React, { useEffect } from "react";

import Search from "./Search";
import OrgTable from "./OrgTable";

function OrgList(props: any) {
  const [orgs, setOrgs] = React.useState([{}]);
  const [queryError, setQueryError] = React.useState({
    error: false,
    helperText: "",
  });

  useEffect(() => {
    if (props.data.orgs) {
      setOrgs(props.data.orgs);
    }
  }, [props.data.orgs]);

  const findClosestMatch = (name: String, query: String) => {
    const pattern = query
      .split("")
      .map((x) => {
        return `(?=.*${x})`;
      })
      .join("");

    const regex = new RegExp(`${pattern}`, "g");
    return name.match(regex);
  };

  const searchByQuery = (userInput: String) => {
    const searchTerm = userInput.toLowerCase();

    const filteredList: {}[] = props.data.orgs.filter((org: any) => {
      const name = org.name.toLowerCase();
      return name.includes(searchTerm) || findClosestMatch(name, searchTerm);
    });

    if (!filteredList.length) {
      setQueryError({
        error: true,
        helperText: "No matches, please try again.",
      });
    } else {
      // Reset the error state.
      setQueryError({
        error: false,
        helperText: "",
      });
    }

    return setOrgs(filteredList);
  };

  const searchByCategory = (userInput: String, searchByNeed?: Boolean) => {
    const searchTerm = userInput.toLowerCase();
    let filteredList: {}[] = [];

    if (searchByNeed) {
      filteredList = props.data.orgs.filter((org: any) => {
        const needs = org.needs.type.join().toLowerCase();
        return needs.includes(searchTerm);
      });
    } else {
      filteredList = props.data.orgs.filter((org: any) => {
        const category = org.category.join().toLowerCase();
        return category.includes(searchTerm);
      });
    }

    return setOrgs(filteredList);
  };

  return (
    <>
      <Search
        searchByQuery={searchByQuery}
        searchByCategory={searchByCategory}
        queryError={queryError}
      />
      <OrgTable tableData={orgs} />
    </>
  );
}

export default OrgList;
