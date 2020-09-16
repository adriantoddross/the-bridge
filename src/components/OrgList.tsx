import React from "react";

import Search from "./Search";
import OrgTable from "./OrgTable";

function OrgList(props: any) {
  const [orgs, setOrgs] = React.useState(props.data.orgs || []);

  const checkName = (name: String, query: String) => {
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

    const filteredList = props.data.orgs.filter((org: any) => {
      const name = org.name.toLowerCase();
      return name.includes(searchTerm) || checkName(name, searchTerm);
    });

    setOrgs(filteredList);
  };

  return (
    <>
      <Search searchByQuery={searchByQuery} />
      <OrgTable tableData={orgs} />
    </>
  );
}

export default OrgList;
