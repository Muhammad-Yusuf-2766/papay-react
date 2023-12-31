import { Box, Container, Stack } from "@mui/material";
import React, { useRef } from "react";
import Card from "@mui/joy/Card";
import CardCover from "@mui/joy/CardCover";
import CardContent from "@mui/joy/CardContent";
import Typography from "@mui/joy/Typography";
import LocationOnRoundedIcon from "@mui/icons-material/LocationOnRounded";
import { CssVarsProvider } from "@mui/joy/styles";
import { CardOverflow, IconButton } from "@mui/joy";
import { Favorite } from "@mui/icons-material";
import VisibilityIcon from "@mui/icons-material/Visibility";
// ========== REDUX ============//
import { useSelector } from "react-redux";
import { createSelector } from "reselect";
import { retrieveTopRestaurants } from "../../screens/HomePage/selector";
import { Restaurant } from "../../../types/user";

// ====  Others ======//
import { serviceApi } from "../../../lib/config";
import { sweetErrorHandling, sweetTopSmallSuccessAlert } from "../../../lib/sweetAlet";
import assert from "assert";
import { Definer } from "../../../lib/definer";
import MemberApiService from "../../ApiServices/memberApiService";
import { MemberLiken } from "../../../types/others";
import { useHistory } from "react-router-dom";

//===== Redux Selector ===== //
const topRestaurantRetriever = createSelector(
  retrieveTopRestaurants,
  (topRestaurants) => ({
    topRestaurants,
  })
);

export function TopRestaurants() {
  //===== Initialization ===== //
  const history = useHistory()
  const { topRestaurants } = useSelector(topRestaurantRetriever);
  console.log("top-Retaurants");
  const refs: any = useRef([]);

  //===== Handlers ===== //
  const chosenRestaurantHandler = (id: string) => {
    history.push(`/restaurant/${id}`);
  }

  const targetLikeTop = async (e: any, id: string) => {
    try {
      assert.ok(localStorage.getItem("member_data"), Definer.auth_err1);
      const memberService = new MemberApiService();
      const like_result: any = await memberService.memberLikeTarget({
        like_ref_id: id,
        group_type: "member",
      });
      assert.ok(like_result, Definer.general_err1);
      
      if(like_result.like_status > 0) {
        e.target.style.fill = 'red';
        refs.current[like_result.like_ref_id].innerHtml++
      } else {
        e.target.style.fill = 'white';
        refs.current[like_result.like_ref_id].innerHtml--
      }

      await sweetTopSmallSuccessAlert("Success", 700, false)
    } catch (error: any) {
      console.log(" ERROR:: targetTop", error);
      sweetErrorHandling(error).then();
    }
  };

  console.log("TopRestaurants;;;", topRestaurants);
  return (
    <div className="top_restaurant_frame">
      <Container>
        <Stack
          flexDirection={"column"}
          alignItems={"center"}
          sx={{ mt: "45px" }}
        >
          <Box className="category_title">TOP Restaurantlar</Box>
          <Stack sx={{ ml: "43px", mt: "43px" }} flexDirection={"row"}>
            {topRestaurants.map((ele: Restaurant) => {
              const image_path = `${serviceApi}/${ele.mb_image}`;
              return (
                <CssVarsProvider key={ele._id}>
                  <Card
                  onClick= {() => chosenRestaurantHandler(ele._id)}
                    // variant="outlined"
                    sx={{
                      minHeight: 430,
                      minWidth: 325,
                      mr: "35px",
                      cursor: "pointer",
                    }}
                  >
                    <CardCover>
                      <img src={image_path} loading="lazy" alt="" />
                    </CardCover>
                    <CardCover
                      sx={{
                        background:
                          "linear-gradient(to top, rgba(0,0,0,0.4), rgba(0,0,0,0) 200px),            linear-gradient(to top, rgba(0,0,0,0.8), rgba(0,0,0,0) 300px)",
                      }}
                    />
                    <CardContent sx={{ justifyContent: "flex-end" }}>
                      <Typography level="h3" textColor="#fff">
                        {ele.mb_nick}
                      </Typography>
                      <Typography
                        startDecorator={<LocationOnRoundedIcon />}
                        textColor="neutral.300"
                      >
                        {ele.mb_address}
                      </Typography>
                    </CardContent>
                    <CardOverflow
                      sx={{
                        display: "flex",
                        flexDirection: "row",
                        gap: 1.5,
                        py: 1.5,
                        px: "var(--card-padding)",
                        borderTop: "1px solid",
                      }}
                    >
                      <IconButton
                      onClick={(e) => {e.stopPropagation()}}
                        aria-label="Like minimal photography"
                        size="md"
                        variant="solid"
                        color="neutral"
                        sx={{
                          position: "absolute",
                          zIndex: 2,
                          borderRadius: "50%",
                          right: "1rem",
                          bottom: 45,
                          transform: "translateY(40%)",
                          color: "rgb(0, 0, 0, .4)",
                        }}
                      >
                        <Favorite
                          onClick={(e) => targetLikeTop(e, ele._id)}
                          style={{
                            fill:
                              ele?.me_liked && ele?.me_liked[0]?.my_favorite
                                ? "red"
                                : "white",
                          }}
                        />
                      </IconButton>

                      <Typography
                        level="body-md"
                        sx={{
                          fontWeight: "md",
                          color: "neutral.300",
                          display: "flex",
                          alignItems: "center",
                          ml: "15px",
                        }}
                      >
                        {ele.mb_views}{" "}
                        <VisibilityIcon sx={{ fontSize: 20, ml: "5px" }} />
                      </Typography>
                      <Box sx={{ width: 2, bgcolor: "divider" }} />

                      <Typography
                        sx={{
                          fontWeight: "md",
                          color: "neutral.300",
                          alignItems: "center",
                          display: "flex",
                        }}
                      >
                        <div
                          ref={(element) => (refs.current[ele._id] = element)}
                        >
                          {ele.mb_likes}
                        </div>
                        <Favorite sx={{ fontSize: 20, marginLeft: "5px" }} />
                      </Typography>
                    </CardOverflow>
                  </Card>
                </CssVarsProvider>
              );
            })}
            {/*============  Card 1 ======== */}
          </Stack>
        </Stack>
      </Container>
    </div>
  );
}
