import React, { useEffect, useState } from "react";
import { Box, Container, Stack } from "@mui/material";
import "../../../css/community.css";
import Tab from "@mui/material/Tab";
import Pagination from "@mui/material/Pagination";
import { TargetArticles } from "./targetArticles";
import { CommunityChats } from "./communityChats";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList/TabList";
import TabPanel from "@mui/lab/TabPanel/TabPanel";
import PaginationItem from "@mui/material/PaginationItem";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import CommunityApiService from "../../ApiServices/communityApiService";
import { BoArticle, SearchArticlesObj } from "../../../types/boArticle";
// ============  REDUX ============//
import { useSelector } from "react-redux";
import { createSelector } from "reselect";
import { useDispatch } from "react-redux";
import { Dispatch } from "@reduxjs/toolkit";
import { setTargetBoArticles } from "./slice";
import { retrieveTargetBoArticles } from "./selector";

//===== Redux Slice ===== //
const actionDispatch = (dispach: Dispatch) => ({
  setTargetBoArticles: (data: BoArticle[]) =>
    dispach(setTargetBoArticles(data)),
});

//===== Redux Selector ===== //
const TargetBoArticlesRetriever = createSelector(
  retrieveTargetBoArticles,
  (targetBoArticles) => ({
    targetBoArticles,
  })
);

export function CommunityPage() {
  //===  INITIALIZATION  ===//
  const { setTargetBoArticles } = actionDispatch(useDispatch());
  const { targetBoArticles } = useSelector(TargetBoArticlesRetriever);
  const [value, setValue] = React.useState("1");
  const [searchArticlesObj, setSearchArticlesObj] = useState<SearchArticlesObj>(
    {
      bo_id: "all",
      page: 1,
      limit: 5,
    }
  );

  const [articlesRebuild, setArticlesRebuild] = useState<Date>(new Date())

  useEffect(() => {
    const communityService = new CommunityApiService();
    communityService
      .getTargetArticles(searchArticlesObj)
      .then((data) => setTargetBoArticles(data))
      .catch((err) => console.log(err));
  }, [searchArticlesObj, articlesRebuild]);

  //===  HANDLERS  ===//
  const handleChange = (even: React.SyntheticEvent, newValue: string) => {
    searchArticlesObj.page = 1;
    switch (newValue) {
      case "1":
        searchArticlesObj.bo_id = "all";
        break;
      case "2":
        searchArticlesObj.bo_id = "celebrity";
        break;
      case "3":
        searchArticlesObj.bo_id = "evaluation";
        break;
      case "4":
        searchArticlesObj.bo_id = "story";
        break;
    }
    setSearchArticlesObj({...searchArticlesObj})
    setValue(newValue);
  };

  const handlePaginationChange = (event: any, value: number) => {
    searchArticlesObj.page = value;
    setSearchArticlesObj({ ...searchArticlesObj });
  };

  return (
    <div className="community_page">
      <div className="community_frame">
        <Container sx={{ m: "50px 0" }}>
          <Stack flexDirection={"row"} justifyContent={"space-between"} gap={2}>
            <CommunityChats />
            <Stack
              className="community_all_frame"
              inputMode="text"
              style={{ border: "1px solid white" }}
            >
              <TabContext value={value}>
                <Box className="article_tabs">
                  <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
                    <TabList
                      onChange={handleChange}
                      aria-label="lab API tabs example"
                      //   style={{ backgroundColor: "#0B0E11" }}
                    >
                      <Tab
                        className="tab_label"
                        label="Barcha Maqolalar"
                        value={"1"}
                      />
                      <Tab
                        className="tab_label"
                        label="Mashxurlar"
                        value={"2"}
                      />
                      <Tab
                        className="tab_label"
                        label="Oshxonaga Baho"
                        value={"3"}
                      />
                      <Tab
                        className="tab_label"
                        label="Hikoyalar"
                        value={"4"}
                      />
                    </TabList>
                  </Box>
                </Box>
                <Box className="article_main">
                  <TabPanel value={"1"}>
                    <TargetArticles targetBoArticles={targetBoArticles}
                    setArticlesRebuild={setArticlesRebuild}
                    />
                  </TabPanel>
                  <TabPanel value={"2"}>
                    <TargetArticles
                    setArticlesRebuild={setArticlesRebuild}
                    targetBoArticles={targetBoArticles} />
                  </TabPanel>
                  <TabPanel value={"3"}>
                    <TargetArticles 
                    setArticlesRebuild={setArticlesRebuild}
                    targetBoArticles={targetBoArticles} />
                  </TabPanel>
                  <TabPanel value={"4"}>
                    <TargetArticles 
                    setArticlesRebuild={setArticlesRebuild}
                    targetBoArticles={targetBoArticles} />
                  </TabPanel>
                </Box>

                <Box
                  className="article_bott"
                  sx={{ justifyContent: "center", display: "flex", mt: 2 }}
                >
                  <Pagination
                    count={14}
                    page={1}
                    renderItem={(item) => (
                      <PaginationItem
                        components={{
                          previous: ArrowBackIcon,
                          next: ArrowForwardIcon,
                        }}
                        {...item}
                        color="secondary"
                      />
                    )}
                    onChange={handlePaginationChange}
                  />
                </Box>
              </TabContext>
            </Stack>
          </Stack>
        </Container>
      </div>
    </div>
  );
}
