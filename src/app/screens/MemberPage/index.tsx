import React from "react";
import { Container } from "@mui/material";
import { Route, Switch, useRouteMatch } from "react-router-dom";
import { VisitOtherPage } from "./visitOtherPage";
import { VisitMyPage } from "./visitMyPage";
import "../../../css/myPage.css";

export function MemberPage(props:any) {
  const {verifiedMemberData} = props
  let member = useRouteMatch();
  console.log(member);
  return (
    <div className="member_page">
      <Switch>
        <Route path={`${member.path}/other`}>
          <VisitOtherPage verifiedMemberData={verifiedMemberData} />
        </Route>
        <Route path={`${member.path}`}>
        <VisitMyPage verifiedMemberData={verifiedMemberData} /> 
        </Route>
      </Switch>
    </div>
  );
}
