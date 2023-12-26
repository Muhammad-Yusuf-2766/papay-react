import {
  Badge,
  Box,
  Button,
  Container,
  IconButton,
  Stack,
} from "@mui/material";
import React from "react";
import { NavLink } from "react-router-dom";

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
            <Box className="hover_line" onClick={props.setPath}>
              <NavLink to={"/orders"} activeClassName="underline">
                Buyurtma
              </NavLink>
            </Box>
            <Box className="hover_line" onClick={props.setPath}>
              <NavLink to={"/help"} activeClassName="underline">
                Yordam
              </NavLink>
            </Box>

            <Box className="hover_line">
              <IconButton
                aria-label="cart"
                id="basic-button"
                aria-controls={undefined}
                aria-haspopup="true"
                aria-expanded={undefined}
                //    onClick={handleClick}
              >
                <Badge badgeContent={3} color="secondary">
                  <img src="/icons/shopping_basket.svg" alt="" />
                </Badge>
              </IconButton>
            </Box>

            <Box>
              <Button
                variant="contained"
                style={{ color: "white", background: "#1976D2" }}
                onClick={props.handleLoginOpen}
              >
                KIRISH
              </Button>
            </Box>
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
