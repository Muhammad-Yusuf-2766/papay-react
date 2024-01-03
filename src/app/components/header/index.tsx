import { Logout } from "@mui/icons-material";
import {
  Badge,
  Box,
  Button,
  Container,
  IconButton,
  ListItemIcon,
  Menu,
  MenuItem,
  Stack,
} from "@mui/material";
import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import Basket from "./basket";

export function NavbarHome(props: any) {
  return (
    <div className="format home_navbar">
      <Container>
        <Stack
          flexDirection={"row"}
          className="navbar_config"
          justifyContent={"space-between"}
        >
          <Box>
            <img src="/icons/Papay.svg" alt="Papay_icon" />
          </Box>
          <Stack
            flexDirection={"row"}
            justifyContent={"space-evenly"}
            alignItems={"center"}
            className="navbar_links"
          >
            <Box className="hover_line" onClick={props.setPath}>
              <NavLink to={"/"} activeClassName="underline">
                Bosh Sahifa
              </NavLink>
            </Box>
            <Box className="hover_line" onClick={props.setPath}>
              <NavLink to={"/restaurant"} activeClassName="underline">
                Oshxona
              </NavLink>
            </Box>
            <Box className="hover_line" onClick={props.setPath}>
              <NavLink to={"/community"} activeClassName="underline">
                Jamiyat
              </NavLink>
            </Box>
            {props.verifiedMemberData ? (
              <Box className="hover_line" onClick={props.setPath}>
                <NavLink to={"/member-page"} activeClassName="underline">
                  Sahifam
                </NavLink>
              </Box>
            ) : null}

            {props.verifiedMemberData ? (
              <Box className="hover_line" onClick={props.setPath}>
                <NavLink to={"/orders"} activeClassName="underline">
                  Buyurtma
                </NavLink>
              </Box>
            ) : null}
            <Box className="hover_line" onClick={props.setPath}>
              <NavLink to={"/help"} activeClassName="underline">
                Yordam
              </NavLink>
            </Box>

           <Basket />

            {!props.verifiedMemberData ? (
              <Box>
                <Button
                  variant="contained"
                  style={{ color: "white", background: "#1976D2" }}
                  onClick={props.handleLoginOpen}
                >
                  KIRISH
                </Button>
              </Box>
            ) : (
              <img
                style={{ width: "48px", height: "48px", borderRadius: "24px" }}
                src={props.verifiedMemberData.mb_image}
                alt=""
                onClick={props.handleLogOutClick}
              />
            )}

            <Menu
              anchorEl={props.anchorEl}
              open={props.open}
              onClose={props.handleCloseLogOut}
              onClick={props.handleCloseLogOut}
              slotProps={{
                paper: {
                  elevation: 0,
                  sx: {
                    overflow: "visible",
                    filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
                    mt: 1.5,
                    "& .MuiAvatar-root": {
                      width: 32,
                      height: 32,
                      marginLeft: -0.5,
                      marginRight: 1,
                    },
                    "&:before": {
                      content: '""',
                      display: "block",
                      position: "absolute",
                      top: 0,
                      right: 14,
                      width: 10,
                      height: 10,
                      bgcolor: "background.paper",
                      transform: "translateY(-50%) rotate(45deg)",
                      zIndex: 0,
                    },
                  },
                },
              }}
              transformOrigin={{ horizontal: "right", vertical: "top" }}
              anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
            >
              <MenuItem onClick={props.handleLogOutRequest}>
                <ListItemIcon>
                  <Box sx={{ color: "black" }}>
                    <Logout fontSize="small" style={{ color: "blue" }} />
                    Log-out
                  </Box>
                </ListItemIcon>
              </MenuItem>
            </Menu>
          </Stack>
        </Stack>

        <Stack className="head_information" justifyContent={"row"}>
          <Stack
            justifyContent={"column"}
            sx={{ marginTop: "86px", marginLeft: "26px" }}
          >
            <Box>
              <img src="/icons/Welcome to Papay.svg" alt="Halal_svg" />
            </Box>
            <Box className="define_restaurant">
              The Authentic Restaurant & Cafe
            </Box>
            <Box className="timeline_service">24 soat xizmatingizdamiz.</Box>
            <Box sx={{ mt: "90px" }}>
              {!props.verifiedMemberData ? (
                <Button
                  variant="contained"
                  style={{
                    width: "210px",
                    height: "60px",
                    background: "#1976D2",
                    color: "white",
                  }}
                  onClick={props.handleSignUpOpen}
                >
                  RO’YHATDAN O’TISH
                </Button>
              ) : null}
            </Box>
          </Stack>
          <Stack flexDirection={"column"}>
            <div className="big_img"></div>
          </Stack>
        </Stack>
      </Container>
    </div>
  );
}
