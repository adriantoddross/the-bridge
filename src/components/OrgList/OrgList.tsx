import React, { useEffect } from "react";

import Search from "./Search";
import OrgTable from "./OrgTable";
import { Fields, OrgListErrorProps } from "./Shared";

function OrgList(props: any) {
  const [orgs, setOrgs] = React.useState([{}]);
  const [error, setError] = React.useState<OrgListErrorProps>({
    error: false,
    field: Fields.None,
    helperText: "",
  });

  useEffect(() => {
    if (props.data.orgs) {
      setOrgs(props.data.orgs);
    }
  }, [props.data.orgs]);

  const checkForErrors = (data: {}[]) => {
    if (!data.length) {
      setError({
        error: true,
        field: Fields.TextField,
        helperText: "No matches, please try again.",
      });
    } else {
      // Reset the error state.
      setError({
        error: false,
        field: Fields.None,
        helperText: "",
      });
    }
  };

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

    checkForErrors(filteredList);
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
        error={error}
      />
      <OrgTable tableData={orgs} />
    </>
  );
}

export default OrgList;
