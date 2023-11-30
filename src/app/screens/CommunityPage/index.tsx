import React from "react";
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

const targetBoArticles = [1, 2, 3, 4, 5];

export function CommunityPage() {
  //===  INITIALIZATION  ===//
  const [value, setValue] = React.useState("1");

  //===  HANDLERS  ===//
  const handleChange = (even: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };

  const handlePaginationChange = (event: any, value: number) => {
    console.log(value);
  };

  return (
    <div className="community_page">
      <div className="community_frame">
        <Container sx={{ m: "50px 0" }}>
          <Stack flexDirection={"row"} justifyContent={"space-between"}  gap={2}>
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
                      <Tab className="tab_label" label="Barcha Maqolalar" value={"1"} />
                      <Tab className="tab_label" label="Mashxurlar" value={"2"} />
                      <Tab className="tab_label" label="Oshxonaga Baho" value={"3"} />
                      <Tab className="tab_label" label="Hikoyalar" value={"4"} />
                    </TabList>
                  </Box>
                </Box>
                <Box className="article_main">
                  <TabPanel value={"1"}>
                    <TargetArticles targetBoArticles={[1, 2]} />
                  </TabPanel>
                  <TabPanel value={"2"}>
                    <TargetArticles targetBoArticles={[1, 2, 3, 4]} />
                  </TabPanel>
                  <TabPanel value={"3"}>
                    <TargetArticles targetBoArticles={[1, 2, 3]} />
                  </TabPanel>
                  <TabPanel value={"4"}>
                    <TargetArticles targetBoArticles={[1, 2, 3, 4, 5]} />
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
