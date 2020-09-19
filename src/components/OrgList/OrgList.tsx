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

  const checkForErrors = (data: {}[], fieldType: Fields) => {
    if (!data.length) {
      setError({
        error: true,
        field: fieldType,
        helperText: "No matches found, please try again.",
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

  const searchByQuery = (userInput: String, list: {}[]) => {
    const searchTerm = userInput.toLowerCase();

    const filteredList: {}[] = list.filter((org: any) => {
      const name = org.name.toLowerCase();
      return name.includes(searchTerm) || findClosestMatch(name, searchTerm);
    });

    return filteredList;
  };

  const searchForOrg = (
    query: string | "",
    type: string | "",
    need: string | ""
  ) => {
    const allOrgs = [...orgs];
    const searchTerm = query.toLowerCase();

    if (searchTerm) {
      const closestMatches = searchByQuery(searchTerm, allOrgs);

      const results = closestMatches.filter((org: any) => {
        const category = org.category.join().toLowerCase();
        const needs = org.needs.type.join().toLowerCase();
        return category.includes(type) && needs.includes(need);
      });
      console.log("Filtering with search term:", results);
    } else {
      const results = allOrgs.filter((org: any) => {
        const category = org.category.join().toLowerCase();
        const needs = org.needs.type.join().toLowerCase();
        return category.includes(type) && needs.includes(need);
      });

      console.log("Filtering without search term:", results);
    }
  };

  return (
    <>
      <Search searchForOrg={searchForOrg} error={error} />
      <OrgTable tableData={orgs} />
    </>
  );
}

export default OrgList;
