import React, { useEffect } from "react";

import Search from "./Search";
import OrgTable from "./OrgTable";

function OrgList(props: any) {
  const [orgs, setOrgs] = React.useState([{}]);

  useEffect(() => {
    if (props.data) {
      setOrgs(props.data);
    }
  }, [props.data]);

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
    const allOrgs = [...props.data];
    const searchTerm = query.toLowerCase();

    if (searchTerm) {
      const closestMatches = searchByQuery(searchTerm, allOrgs);

      const results = closestMatches.filter((org: any) => {
        const category = org.category.join().toLowerCase();
        const needs = org.needs.type.join().toLowerCase();
        return category.includes(type) && needs.includes(need);
      });

      setOrgs(results);
    } else {
      const results = allOrgs.filter((org: any) => {
        const category = org.category.join().toLowerCase();
        const needs = org.needs.type.join().toLowerCase();
        return category.includes(type) && needs.includes(need);
      });

      setOrgs(results);
    }
  };

  return (
    <>
      <Search searchForOrg={searchForOrg} />
      <OrgTable tableData={orgs} />
    </>
  );
}

export default OrgList;
