import React from "react";

import Search from "./Search";
import OrgTable from "./OrgTable";

function OrgList(props: any) {
  const [orgs, setOrgs] = React.useState(props.orgs || {});

  return (
    <>
      <Search />
      <OrgTable />
    </>
  );
}

export default OrgList;
