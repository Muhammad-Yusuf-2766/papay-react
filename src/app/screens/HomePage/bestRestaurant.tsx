import { Favorite } from "@mui/icons-material";
import {
  AspectRatio,
  Card,
  CardOverflow,
  CssVarsProvider,
  IconButton,
  Link,
  Typography,
} from "@mui/joy";
import { Box, Container, Stack, Button } from "@mui/material";
import React, { useRef } from "react";
import LocationOnRoundedIcon from "@mui/icons-material/LocationOnRounded";
import CallIcon from "@mui/icons-material/Call";
import VisibilityIcon from "@mui/icons-material/Visibility";
// REDUX
import { useSelector } from "react-redux";
import { createSelector } from "reselect";
import { retrieveBestRestaurants } from "../../screens/HomePage/selector";
import { Restaurant } from "../../../types/user";
import { serviceApi } from "../../../lib/config";
import { Definer } from "../../../lib/definer";
import MemberApiService from "../../ApiServices/memberApiService";
import assert from "assert";
import {
  sweetErrorHandling,
  sweetTopSmallSuccessAlert,
} from "../../../lib/sweetAlet";
import { useHistory } from "react-router-dom";

//===== Redux Selector ===== //
const bestRestaurantRetriever = createSelector(
  retrieveBestRestaurants,
  (bestRestaurants) => ({
    bestRestaurants,
  })
);

export function BestRestaurants() {
  //===== Initialization ===== //
  const { bestRestaurants } = useSelector(bestRestaurantRetriever);
  const refs: any = useRef([]);
  const history = useHistory();

  // ==== Handlers =====//
  const chosenRestaurantHandler = (id: string) => {
    history.push(`/restaurant/${id}`);
  };
  const goRestaurantsHandler = () => history.push(`/restaurant`);

  const targetLikeBest = async (e: any, id: string) => {
    try {
      assert.ok(localStorage.getItem("member_data"), Definer.auth_err1);
      const memberService = new MemberApiService();
      const like_result: any = await memberService.memberLikeTarget({
        like_ref_id: id,
        group_type: "member",
      });
      assert.ok(like_result, Definer.general_err1);

      if (like_result.like_status > 0) {
        e.target.style.fill = "red";
        refs.current[like_result.like_ref_id].innerHtml++;
      } else {
        e.target.style.fill = "white";
        refs.current[like_result.like_ref_id].innerHtml--;   
      }
      await sweetTopSmallSuccessAlert("Success", 700, false);
    } catch (error: any) {
      console.log("targetLikeBest ERROR:: targetTop", error);
      sweetErrorHandling(error).then();
    }
  };

  return (
    <div className="best_restaurant_frame">
      <img
        src="icons/Setka_icon.svg"
        alt=""
        style={{
          position: "absolute",
          left: "6%",
          transform: "rotate(90degree)",
        }}
      />

      <Container sx={{ paddingTop: "153px" }}>
        <Stack flexDirection={"column"} alignItems={"center"}>
          <Box className="category_title">Zo’r Restaurantlar</Box>
          <Stack flexDirection={"row"} sx={{ ml: "37px", mt: "43px" }}>
            {bestRestaurants.map((ele: Restaurant) => {
              const image_path = `${serviceApi}/${ele.mb_image}`;
              return (
                <CssVarsProvider>
                  {" "}
                  {/*  CssVarsProvider bizga MUI ni ichida MUI/joy ni style larini ishlata olishligimiz uchun kerak  */}
                  {/*============  Card 1 ======== */}
                  <Card
                    onClick={() => chosenRestaurantHandler(ele._id)}
                    variant="outlined"
                    sx={{
                      minHeight: 430,
                      minWidth: 325,
                      mr: "35px",
                      cursor: "pointer",
                    }}
                  >
                    <CardOverflow>
                      <AspectRatio ratio={"1"}>
                        <img src={image_path} alt="Restaurant_img" />
                      </AspectRatio>
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
                          transform: "translateY(165%)",
                          color: "rgb(0, 0, 0, .4)",
                        }}
                      >
                        <Favorite
                        onClick={(e) => targetLikeBest(e, ele._id)}
                          style={{
                            fill:
                              ele?.me_liked && ele?.me_liked[0]?.my_favorite
                                ? "red"
                                : "white",
                          }}
                        />
                      </IconButton>
                    </CardOverflow>
                    <Typography level="h2" sx={{ fontSize: "md", mt: 2 }}>
                      {ele.mb_nick}
                    </Typography>
                    <Typography level="body-md" sx={{ mb: 2 }}>
                      <Link
                        href=""
                        startDecorator={<LocationOnRoundedIcon />}
                        textColor={"neutral.700"}
                      >
                        {ele.mb_address}
                      </Link>
                    </Typography>
                    <Typography level="body-md" sx={{ mb: 2 }}>
                      <Link
                        href=""
                        startDecorator={<CallIcon />}
                        textColor={"neutral.700"}
                      >
                        {ele.mb_phone}
                      </Link>
                    </Typography>
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
                      <Typography
                        level="body-md"
                        sx={{
                          fontWeight: "md",
                          color: "neutral",
                          display: "flex",
                          alignItems: "center",
                          ml: "15px",
                        }}
                      >
                        {ele.mb_views}
                        <VisibilityIcon sx={{ fontSize: 20, ml: "5px" }} />
                      </Typography>
                      <Box sx={{ width: 2, bgcolor: "divider" }} />

                      <Typography
                        sx={{
                          fontWeight: "md",
                          color: "neutral",
                          alignItems: "center",
                          display: "flex",
                        }}
                      >
                        <div
                        ref={(element) => (refs.current[ele._id] = element)}
                        >{ele.mb_likes}</div>
                        <Favorite
                          sx={{ fontSize: 20, marginLeft: "5px" }}
                        />
                      </Typography>
                    </CardOverflow>
                  </Card>
                </CssVarsProvider>
              );
            })}
          </Stack>
          <Stack
            flexDirection={"row"}
            justifyContent={"flex-end"}
            style={{ width: "100%", marginTop: "20px" }}
          >
            <Button style={{ background: "#1976d2", color: "white" }} onClick={goRestaurantsHandler}>
              Barchasini Ko'rish
            </Button>
          </Stack>
        </Stack>
      </Container>
    </div>
  );
}
