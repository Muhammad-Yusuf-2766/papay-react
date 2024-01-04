import React, { useEffect, useState } from "react";
import { Box, Button, Container, Rating, Stack } from "@mui/material";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
// import "swiper/css/thumbs";
import Checkbox from "@mui/material/Checkbox";

import { FreeMode, Navigation, Thumbs } from "swiper";
import { Favorite, FavoriteBorder } from "@mui/icons-material";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";
import Marginer from "../../components/marginer";
import { useParams } from "react-router-dom";
import { Product } from "../../../types/product";
import { Restaurant } from "../../../types/user";

// ============  REDUX ============//
import { useSelector } from "react-redux";
import { createSelector } from "reselect";
import {
  retrieveChosenProduct,
  retrieveChosenRestaurant,
} from "../../screens/RestaurantPage/selector";

import { useDispatch } from "react-redux";
import { Dispatch } from "@reduxjs/toolkit";
import {
  setChosenProduct,
  setChosenRestaurant,
} from "../../screens/RestaurantPage/slice";
import ProductApiService from "../../ApiServices/productApiService";
import RestaurantApiService from "../../ApiServices/restaurantApiService";
import { serviceApi } from "../../../lib/config";
import assert from "assert";
import { Definer } from "../../../lib/definer";
import { sweetErrorHandling, sweetTopSmallSuccessAlert } from "../../../lib/sweetAlet";
import MemberApiService from "../../ApiServices/memberApiService";

//===== Redux Slice ===== //
const actionDispatch = (dispach: Dispatch) => ({
  setChosenProduct: (data: Product) => dispach(setChosenProduct(data)),
  setChosenRestaurant: (data: Restaurant) => dispach(setChosenRestaurant(data)),
});

//===== Redux Selector ===== //
const chosenProductRetriever = createSelector(
  retrieveChosenProduct,
  (chosenProduct) => ({
    chosenProduct,
  })
);
const chosenRestaurantRetriever = createSelector(
  retrieveChosenRestaurant,
  (chosenRestaurant) => ({
    chosenRestaurant,
  })
);


export function ChosenDish(props: any) {
  // ========= Initializations ================= //
  let { dish_id } = useParams<{ dish_id: string }>();
  const { setChosenRestaurant, setChosenProduct } =
    actionDispatch(useDispatch());
  const { chosenProduct } = useSelector(chosenProductRetriever);
  const { chosenRestaurant } = useSelector(chosenRestaurantRetriever);
  const label = { inputProps: { "aria-label": "Checkbox demo" } };
  const [productRebuild, setProductRebuild] = useState<Date>(new Date());

  const dishRelatedProcess = async () => {
    try {
      const productService = new ProductApiService();
      const product: Product = await productService.getChosenDish(dish_id)
      setChosenProduct(product)

      const restaurantService = new RestaurantApiService()
      const restaurant = await restaurantService.getChosenRestaurant(product.restaurant_mb_id)
      setChosenRestaurant(restaurant)
    } catch (error) {
      console.log("Error:::dishRelatedProcess", error);
      
    }
  }
  
  useEffect(() => {
    dishRelatedProcess().then();
  }, [productRebuild]);
  // ========= Handlers =================//


  const targetLikeProduct = async (e: any) => {
    try {
      assert.ok(localStorage.getItem("member_data"), Definer.auth_err1);
      const memberService = new MemberApiService();
      const like_result: any = await memberService.memberLikeTarget({
        like_ref_id: e.target.id,
        group_type: "product",
      });
      assert.ok(like_result, Definer.general_err1);
      await sweetTopSmallSuccessAlert("Success", 700, false);
      setProductRebuild(new Date());
    } catch (error: any) {
      console.log("targetLikeProduct ERROR::", error);
      sweetErrorHandling(error).then();
    }
  };
    


  useEffect(() => {
    dishRelatedProcess().then();
  }, []);

  return (
    <div className="chosen_dish_page">
      <Container className="dish_container">
        <Stack className="chosen_dish_slider">
          <Swiper
            className="dish_swiper"
            loop={false}
            spaceBetween={15}
            navigation={true}
            slidesPerView="auto"
            modules={[FreeMode, Navigation, Thumbs]}
          >
            {chosenProduct?.product_images?.map((ele: string) => {
              const img_path = `${serviceApi}/${ele}`;
              return (
                <SwiperSlide>
                  <img
                    style={{ width: "100%", height: "100%" }}
                    src={img_path}
                    alt=""
                  />
                </SwiperSlide>
              );
            })}
          </Swiper>

          <Swiper
            className="dish_swiper_2"
            slidesPerView={3}
            loop
            centeredSlides={true}
            spaceBetween={15}
            // navigation= {true}
            autoplay={{
              delay: 2000,
              disableOnInteraction: true,
            }}
          >
            {chosenProduct?.product_images?.map((ele: string) => {
              const img_path = `${serviceApi}/${ele}`;
              return (
                <SwiperSlide className="dish_slider">
                  <img
                    style={{ width: "100%", height: "100%" }}
                    src={img_path}
                    alt=""
                  />
                </SwiperSlide>
              );
            })}
          </Swiper>
        </Stack>

        <Stack className="chosen_dish_info_container">
          <Box className="chosen_dish_info_box">
            <strong className="dish_name">{chosenProduct?.product_name}</strong>
            <span className="chef_name">{chosenRestaurant?.mb_nick}</span>
            <Box className="rating_box">
              <Rating
                style={{ fontSize: "35px" }}
                name="half_rating"
                defaultValue={3.3}
                precision={0.5}
              />
              <div className="evalution_box">
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    marginRight: "30px",
                  }}
                >
                  <Checkbox
                    {...label}
                    onClick={targetLikeProduct}
                    id={chosenProduct?._id}
                    icon={<FavoriteBorder />}
                    checkedIcon={<Favorite style={{ color: "red" }} />}
                    checked={chosenProduct?.me_liked && chosenProduct?.me_liked[0]?.my_favorite ? true : false}
                  />

                  <span>{chosenProduct?.product_likes} ta</span>
                </div>
                <div style={{ display: "flex", alignItems: "center" }}>
                  <RemoveRedEyeIcon
                    style={{ color: "#979797" }}
                    sx={{ mr: "7px" }}
                  />
                  <span>{chosenProduct?.product_views} ta</span>
                </div>
              </div>
            </Box>
            <p>
              {chosenProduct?.product_description ? chosenProduct?.product_description : "No description"}
            </p>
            <Marginer
              direction="horizontal"
              height="1.5"
              width="100%"
              bg="#000000"
            />
            <div className="dish_price">
              <span>Narxi:</span>
              <span>$ {chosenProduct?.product_price}</span>
            </div>
            <div className="button_box">
              <Button
                style={{ width: "230px", height: "44px" }}
                variant="contained"
                onClick={() => {props.onAdd(chosenProduct)}}
              >
                Savatga Qo'shish
              </Button>
            </div>
          </Box>
        </Stack>
      </Container>
    </div>
  )}
