import React from "react";

import Search from "./Search";
import OrgTable from "./OrgTable";

function OrgList(props: any) {
  const [orgs] = React.useState(props.orgs || []);

  return (
    <>
      <Search />
      <OrgTable tableData={orgs} />
    </>
  );
}

export default OrgList;
