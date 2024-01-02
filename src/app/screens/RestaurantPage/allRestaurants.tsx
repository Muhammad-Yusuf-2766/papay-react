import {
  Box,
  Button,
  Container,
  Pagination,
  PaginationItem,
  Stack,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import IconButton from "@mui/joy/IconButton";
import React, { useEffect, useRef, useState } from "react";
import {
  AspectRatio,
  Card,
  CardOverflow,
  CssVarsProvider,
  Link,
  Typography,
} from "@mui/joy";
import { Favorite } from "@mui/icons-material";
import LocationOnRoundedIcon from "@mui/icons-material/LocationOnRounded";
import CallIcon from "@mui/icons-material/Call";
import VisibilityIcon from "@mui/icons-material/Visibility";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
// ============  REDUX ============//
import { useSelector } from "react-redux";
import { createSelector } from "reselect";
import { retrieveTargetRestaurants } from "../../screens/RestaurantPage/selector";
import { Restaurant } from "../../../types/user";
import { useDispatch } from "react-redux";
import { Dispatch } from "@reduxjs/toolkit";
import { setTargetRestaurants } from "../../screens/RestaurantPage/slice";
import RestaurantApiService from "../../ApiServices/restaurantApiService";
import { SearchObj } from "../../../types/others";
import { serviceApi } from "../../../lib/config";
import assert from "assert";
import { Definer } from "../../../lib/definer";
import MemberApiService from "../../ApiServices/memberApiService";
import {
  sweetErrorHandling,
  sweetTopSmallSuccessAlert,
} from "../../../lib/sweetAlet";

// const order_list =Array.from(Array(8).keys());

//===== Redux Slice ===== //
const actionDispatch = (dispach: Dispatch) => ({
  setTargetRestaurants: (data: Restaurant[]) =>
    dispach(setTargetRestaurants(data)),
});

//===== Redux Selector ===== //
const targetRestaurantsRetriever = createSelector(
  retrieveTargetRestaurants,
  (targetRestaurants) => ({
    targetRestaurants,
  })
);

export function AllRestaurants() {
  //===== Initialization ===== //
  const { setTargetRestaurants } = actionDispatch(useDispatch());
  const { targetRestaurants } = useSelector(targetRestaurantsRetriever);
  const refs: any = useRef([]);
  const [targetSearchObject, setTargetSearchObject] = useState<SearchObj>({
    page: 1,
    limit: 8,
    order: "mb_point",
  });

  useEffect(() => {
    // ToDo: retrieve_Target_Restaurants data
    const restaurantService = new RestaurantApiService();
    restaurantService
      .getRestaurants(targetSearchObject)
      .then((data) => setTargetRestaurants(data))
      .catch((err) => console.log("ERROR: AllREstaurants:::", err));
  }, [targetSearchObject]);

  // ========== HANDLERS ==============//
  const searchHandler = (category: string) => {
    targetSearchObject.page = 1;
    targetSearchObject.order = category;
    setTargetSearchObject({ ...targetSearchObject });
  };
  const handlePaginationChange = (event: any, value: number) => {
    targetSearchObject.page = value;
    setTargetSearchObject({ ...targetSearchObject });
  };
  const targetLikeHandler = async (e: any, id: string) => {
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
        refs.current[like_result.like_ref_id].innerText = (
          parseInt(refs.current[like_result.like_ref_id].innerText) + 1
        ).toString();
      } else {
        e.target.style.fill = "white";
        refs.current[like_result.like_ref_id].innerText = (
          parseInt(refs.current[like_result.like_ref_id].innerText) - 1
        ).toString();
      }
      await sweetTopSmallSuccessAlert("Success", 700, false);
    } catch (error: any) {
      console.log("targetLikeBest ERROR:: targetTop", error);
      sweetErrorHandling(error).then();
    }
  };

  return (
    <div className="all_restaurants">
      <Container>
        <Stack className="column" alignItems={"center"}>
          <Box className="fill_search_box">
            <Box className="fill_box">
              <a onClick={() => searchHandler("mb_point")} href="#">
                Zo'r
              </a>
              <a onClick={() => searchHandler("mb_views")} href="#">
                Mashxur
              </a>
              <a onClick={() => searchHandler("mb_likes")} href="#">
                Trenddagi
              </a>
              <a onClick={() => searchHandler("createdAt")} href="#">
                Yangi
              </a>
            </Box>
            <Box className="search_big_box">
              <form className="search_form" action="" method="">
                <input
                  className="searchInput"
                  type="search"
                  name="resSearch"
                  placeholder="Qidiruv"
                />
                <Button
                  className="button_search"
                  variant="contained"
                  endIcon={<SearchIcon />}
                >
                  Izlash
                </Button>
              </form>
            </Box>
          </Box>

          <Stack className="all_res_box">
            <CssVarsProvider>
              {targetRestaurants.map((ele: Restaurant) => {
                const image_path = `${serviceApi}/${ele.mb_image}`;
                return (
                  <Card
                    variant="outlined"
                    sx={{
                      minHeight: 410,
                      minWidth: 290,
                      mx: "17px",
                      my: "20px",
                    }}
                  >
                    <CardOverflow>
                      <AspectRatio ratio={"1"}>
                        <img src={image_path} alt="Restaurant_img" />
                      </AspectRatio>
                      <IconButton
                        aria-label="Like minimal photography"
                        size="md"
                        variant="solid"
                        color="neutral"
                        onClick={(e) => {
                          e.stopPropagation();
                        }}
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
                          onClick={(e) => targetLikeHandler(e, ele._id)}
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
                      {ele.mb_nick} restaurant
                    </Typography>
                    <Typography level="body-md" sx={{ mb: 2 }}>
                      <Link
                        href=""
                        startDecorator={<LocationOnRoundedIcon />}
                        textColor={"neutral.700"}
                      >
                        Istanbul, bahcesaray 4-45
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
                        borderColor: "neutral.outlinedBorder",
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
                        <Favorite sx={{ fontSize: 20, marginLeft: "5px" }} />
                      </Typography>
                    </CardOverflow>
                  </Card>
                );
              })}
            </CssVarsProvider>
          </Stack>

          <Stack className="bottom_box">
            <img className="line_img" src="/icons/Setka_icon.svg" alt="" />
            <Pagination
              count={
                targetSearchObject.page >= 3 ? targetSearchObject.page++ : 3
              }
              page={targetSearchObject.page}
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
            <img className="line_img" src="/icons/setka_2.svg" alt="" />
          </Stack>
        </Stack>
      </Container>
    </div>
  );
}
