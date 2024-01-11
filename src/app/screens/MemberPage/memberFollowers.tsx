import React, { useEffect, useState } from "react";
import { Box, Stack } from "@mui/material";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";

// REDUX
import { useDispatch, useSelector } from "react-redux";
import { createSelector } from "reselect";
import { Dispatch } from "@reduxjs/toolkit";
import { retrieveMemberFollowers } from "./selector";
import { setMemberFollowers } from "./slice";
import { FollowSearchObj, Follower } from "../../../types/follow";
import { useHistory } from "react-router-dom";

/**REDUX SLICE */
const actionDispatch = (dispatch: Dispatch) => ({
  setMemberFollowers: (data: Follower[]) => dispatch(setMemberFollowers(data))
});

/**REDUX SELECTOR */
const memberFollowersRetriever = createSelector(
  retrieveMemberFollowers,
  (memberFollowers) => ({
    memberFollowers
  })
);


const followers = [
  { mb_nick: "botir", following: true },
  { mb_nick: "jonibek", following: false },
  { mb_nick: "larisa", following: true },
];

export function MemberFollowers(props: any) {
   // INITIALIZATIONS
   const history = useHistory();
   const { setMemberFollowers } = actionDispatch(useDispatch());
   const { memberFollowers } = useSelector(memberFollowersRetriever);
  return (
    <Stack>
      {followers.map((follower) => {
        const image_url = "/community/Sami_Yusuf.jpg";
        return (
          <Box className={"follow_box"}>
            
            <Avatar alt={""} src={image_url} sx={{ width: 89, height: 89 }} />
            <div
              style={{
                width: "400px",
                display: "flex",
                flexDirection: "column",
                marginLeft: "25px",
                height: "85%",
              }}
            >
              <span className={"username_text"}>USER</span>
              <span className={"name_text"}>{follower.mb_nick}</span>
              {props.actions_enabled &&
                (follower.following ? (
                  <Button
                    variant={"contained"}
                    className={"following_already"}
                    disabled
                  >
                    FOLLOWING
                  </Button>
                ) : (
                  <Button 
                   variant={"contained"}
                   startIcon={
                    <img 
                     src="/icons/Followers.svg"
                     style={{width:'40px'}}
                     alt=""
                     />
                   }
                  className="follow_btn"
                  >
                    FOLLOW Back
                  </Button>
                ))}
            </div>
          </Box>
        );
      })}
    </Stack>
  );
}
