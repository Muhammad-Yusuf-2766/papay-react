import React from "react";
import Pagination from "@mui/material/Pagination";
import PaginationItem from "@mui/material/PaginationItem";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { Container, Box, Stack, Tab, Button } from "@mui/material";
import TabContext from "@mui/lab/TabContext";
import TabPanel from "@mui/lab/TabPanel";
import { MemberFollowers } from "./memberFollowers";
import { MemberFollowing } from "./memberFollowing";
import SettingsIcon from "@mui/icons-material/Settings";
import { TabList } from "@mui/lab";
import { MemberPosts } from "./memberPosts";
// import { MemberPosts } from "./MemberPosts";
import styled from 'styled-components';
import TViewer from "../../components/tuiEditor/TVieewer";

export function VisitOtherPage(props: any) {
  /** INITIALIZATIONS **/
  const [value, setValue] = React.useState("4");

  /** HANDLERS **/
  const handleChange = (event: any, newValue: string) => {
    setValue(newValue);
  };

  return (
    <div className={"my_page"}>
      <Container maxWidth="lg" sx={{ mt: "50px", mb: "50px" }}>
        <Stack className="my_page_frame">
          <TabContext value={value}>
            <Stack className={"my_page_left"}>
              <Box display={"flex"} flexDirection={"column"}>
                <TabPanel value={"1"}>
                  <Box className={"menu_name"}>Mening Maqolalarim</Box>
                  <Box className={"menu_content"}>
                    <MemberPosts />
                    <Stack
                      sx={{ my: "40px" }}
                      direction="row"
                      alignItems="center"
                      justifyContent="center"
                    >
                      <Box className={"bottom_box"}>
                        <Pagination
                          count={3}
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
                        />
                      </Box>
                    </Stack>
                  </Box>
                </TabPanel>
                <TabPanel value="2">
                  <Box className="menu_name">Followers</Box>
                  <Box className="menu content">
                    <MemberFollowers actions_enabled={false} />
                  </Box>
                </TabPanel>
                <TabPanel value="3">
                  <Box className="menu_name">Following</Box>
                  <Box className="menu_content">
                    <MemberFollowing actions_enabled={false} />
                  </Box>
                </TabPanel>
                <TabPanel value="4">
                  <Box className="menu_name">Tanlangan Maqola</Box>
                  <Box className="menu_content">
                  <TViewer text={`<h2>Assalamu alaykum</h2>`} />
                  </Box>
                </TabPanel>
              </Box>
            </Stack>

            <Stack className="my_page_right">
              <Box className="order_info_box">
                {/* <a
                  onClick={() => setValue("6")}
                  className="settings_btn"
                  href="#"
                >
                  <SettingsIcon />
                </a> */}
                <Box
                  display={"flex"}
                  flexDirection={"column"}
                  alignItems={"center"}
                >
                  <div className="order_user_img"></div>
                  <span className="order_user_name">Sami Yusuf</span>
                  <span className="order_user_prof">Foydalanuvchi</span>

                  <Box className="links">
                    <a href="#">
                      <img src="/icons/facebook.svg" alt="" />
                    </a>
                    <a href="#">
                      <img src="/icons/instagram.svg" alt="" />
                    </a>
                    <a href="#">
                      <img src="/icons/twitter.svg" alt="" />
                    </a>
                    <a href="#">
                      <img src="/icons/youtube.svg" alt="" />
                    </a>
                  </Box>

                  <Box className="user_media_box">
                    <p className="follows">Followers: 3</p>
                    <p className="followings">Followings: 2</p>
                  </Box>
                  <p className="user_desc">qo'shimcha ma'lumot kiritilmagan</p>
                </Box>
                <Box
                  display={"flex"}
                  justifyContent={"flex-end"}
                  sx={{ mt: "10px" }}
                >
                  <TabList
                    onChange={handleChange}
                    aria-label="lab API tabs example"
                  >
                    <Tab
                      style={{ flexDirection: "column" }}
                      value={" "}
                      component={() => (
                        // shu yerda (e) bo'lishi kerak
                        <Button
                          variant="contained"
                          onClick={() => setValue(" ")}
                        >
                          Follow qilish
                        </Button>
                      )}
                    />
                  </TabList>
                </Box>
              </Box>

              <Box className="my_page_menu">
                  <Box
                    display="flex"
                    flexDirection="column"
                    className="tablist"
                  >
                    <Tab
                      value={"1"}
                      component={() => (
                        <div
                          className={`menu_box ${value === "1" ? "active" : ""}`}
                          onClick={() => setValue("1")}
                        >
                          <img src="/icons/Pencil.svg" alt="" />
                          <span>Maqolalari</span>
                        </div>
                      )}
                    />
                    <Tab
                      value={"2"}
                      component={() => (
                        <div
                          className={`menu_box ${value === "2" ? "active" : ""}`}
                          onClick={() => setValue("2")}
                        >
                          <img src="/icons/Followers.svg" alt="" />
                          <span>Follower</span>
                        </div>
                      )}
                    />
                    <Tab
                      value={"3"}
                      component={() => (
                        <div
                          className={`menu_box ${value === "3" ? "active" : ""}`}
                          onClick={() => setValue("3")}
                        >
                          <img src="/icons/Following.svg" alt="" />
                          <span>Following</span>
                        </div>
                      )}
                    />
                  </Box>
                </Box>
            </Stack>
          </TabContext>
        </Stack>
      </Container>
    </div>
  );
}
