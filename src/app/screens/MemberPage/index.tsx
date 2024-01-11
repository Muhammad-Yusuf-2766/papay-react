import React from "react";
import { Container } from "@mui/material";
import { Route, Switch, useLocation, useRouteMatch } from "react-router-dom";
import { VisitOtherPage } from "./visitOtherPage";
import { VisitMyPage } from "./visitMyPage";
import "../../../css/myPage.css";

function useQuery() {
  const {search} = useLocation()
  return React.useMemo(() => new URLSearchParams(search), [search])
}

export function MemberPage(props:any) {
  const {verifiedMemberData} = props
  let member = useRouteMatch();
  const query = useQuery()
  const chosen_mb_id: string | null = query.get("mb_id") ?? null
  const chosen_art_id: string | null = query.get("art_id") ?? null

  return (
    <div className="member_page">
      <Switch>
        <Route path={`${member.path}/other`}>
          <VisitOtherPage verifiedMemberData={verifiedMemberData} chosen_mb_id={chosen_mb_id} />
        </Route>
        <Route path={`${member.path}`}>
        <VisitMyPage verifiedMemberData={verifiedMemberData}
        chosen_mb_id={chosen_mb_id} /> 
        </Route>
      </Switch>
    </div>
  );
}
