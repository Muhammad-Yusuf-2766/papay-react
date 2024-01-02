import React, { useEffect, useState } from "react";
import { Box, Button, Container, Stack } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { Swiper, SwiperSlide } from "swiper/react";
import Badge from "@mui/material/Badge";
import CheckBox from "@mui/material/Checkbox";
import FavoriteBorder from "@mui/icons-material/FavoriteBorder";
import Favorite from "@mui/icons-material/Favorite";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";
import MonetizationIcon from "@mui/icons-material/MonetizationOn";
import StarIcon from "@mui/icons-material/Star";
import { Margin } from "@mui/icons-material";
import { useHistory, useParams } from "react-router-dom";
// ============  REDUX ============//
import { useSelector } from "react-redux";
import { createSelector } from "reselect";
import {
  retrieveChosenRestaurant,
  retrieveTargetProducts,
  retrievetRandomRestaurants,
} from "../../screens/RestaurantPage/selector";
import { Restaurant } from "../../../types/user";
import { useDispatch } from "react-redux";
import { Dispatch } from "@reduxjs/toolkit";
import {
  setChosenProduct,
  setChosenRestaurant,
  setRandomRestaurants,
  setTargetProducts,
  setTargetRestaurants,
} from "../../screens/RestaurantPage/slice";
import RestaurantApiService from "../../ApiServices/restaurantApiService";
import { ProductSearchObj } from "../../../types/others";
import ProductApiService from "../../ApiServices/productApiService";
import { Product } from "../../../types/product";
import { serviceApi } from "../../../lib/config";
import { data } from 'dom7';

//===== Redux Slice ===== //
const actionDispatch = (dispach: Dispatch) => ({
  setRandomRestaurants: (data: Restaurant[]) =>
    dispach(setRandomRestaurants(data)),
  setChosenRestaurant: (data: Restaurant) => dispach(setChosenRestaurant(data)),
  setTargetProducts: (data: Product[]) => dispach(setTargetProducts(data)),
  setChosenProduct: (data: Product) => dispach(setChosenProduct(data)),
});

//===== Redux Selector ===== //
const RandomRestaurantsRetriever = createSelector(
  retrievetRandomRestaurants,
  (randomRestaurants) => ({
    randomRestaurants,
  })
);
const ChosenRestaurantRetriever = createSelector(
  retrieveChosenRestaurant,
  (chosenRestaurant) => ({
    chosenRestaurant,
  })
);
const TargetProductsRetriever = createSelector(
  retrieveTargetProducts,
  (targetProducts) => ({
    targetProducts,
  })
);

export function OneRestaurant() {
  //===== Initialization ===== //
  const history = useHistory()
  let { restaurant_id } = useParams<{ restaurant_id: string }>();
  const { setRandomRestaurants, setChosenRestaurant, setTargetProducts } =
    actionDispatch(useDispatch());
  const { randomRestaurants } = useSelector(RandomRestaurantsRetriever);
  const { chosenRestaurant } = useSelector(ChosenRestaurantRetriever);
  const { targetProducts } = useSelector(TargetProductsRetriever);
  const [chosenRestaurantId, setchosenRestaurantId] =
    useState<string>(restaurant_id);
  const [targetProductSearchObj, setTargetProductSearchObj] =
    useState<ProductSearchObj>({
      page: 1,
      limit: 9,
      order: "createdAt",
      restaurant_mb_id: restaurant_id,
      product_collection: "drinks",
    });

  useEffect(() => {

    const restaurantService = new RestaurantApiService()
    restaurantService.getRestaurants({page:1, limit: 10, order: "random"}).then(data => setRandomRestaurants(data)).catch(err => console.log(err))

    const productService = new ProductApiService();
    productService
      .getTargetProducts(targetProductSearchObj)
      .then((data) => setTargetProducts(data))
      .catch((err) => console.log("ERROR: OneRestaurant useEffect::", err));
  }, [targetProductSearchObj]);

  // ========== HANDLERS ==============//
  const chosenRestaurantHandler = (id: string) => {
    setchosenRestaurantId(id)
    targetProductSearchObj.restaurant_mb_id = id
    setTargetProductSearchObj({...targetProductSearchObj})
    history.push(`/restaurant/${id}`)
  }
  
  return (
    <div className="single_restaurant">
      <Container>
        <Stack flexDirection={"column"} alignItems={"center"}>
          <Stack className="avatar_big_box">
            <Box className="top_text">
              <p>Burak CNZ Restaurant</p>
              <Box className="single_search_big_box">
                <form className="single_search_form" action="" method="">
                  <input
                    className="single_searchInput"
                    type="search"
                    name="resSearch"
                    placeholder="Qidiruv"
                  />
                  <Button
                    className="single_button_search"
                    variant="contained"
                    endIcon={<SearchIcon />}
                  >
                    Izlash
                  </Button>
                </form>
              </Box>
            </Box>
          </Stack>

          <Stack
            flexDirection={"row"}
            style={{ width: "100%", marginTop: "35px" }}
          >
            <Box className="prev_btn restaurant-prev">
              <ArrowBackIosNewIcon
                sx={{ fontSize: 40 }}
                style={{ color: "white" }}
              />
            </Box>
            <Swiper
              className="restaurant_avatars_wrapper"
              slidesPerView={7}
              centeredSlides={false}
              spaceBetween={30}
              navigation={{
                nextEl: ".restaurant-next",
                prevEl: ".restaurant-prev",
              }}
            >
              {randomRestaurants.map((ele: Restaurant) => {
                const image_path = `${serviceApi}/${ele.mb_image}`
                return (
                  <SwiperSlide
                  onClick={() => chosenRestaurantHandler(ele._id)}
                    className="restaurant_avatars"
                    key={ele._id}
                    style={{ cursor: "pointer" }}
                  >
                    <img src={image_path} alt="chef-img" />
                    <span>{ele.mb_nick}</span>
                  </SwiperSlide>
                );
              })}
            </Swiper>
            <Box className="next_btn restaurant-next">
              <ArrowForwardIosIcon sx={{ fontSize: 40, color: "white" }} />
            </Box>
          </Stack>

          <Stack
            display={"flex"}
            alignItems={"flex-end"}
            width={"90%"}
            sx={{ mt: "65px" }}
          >
            <Box className="dishs_filter_box">
              <Button variant="contained" color="secondary">
                New
              </Button>
              <Button variant="contained" color="secondary">
                price
              </Button>
              <Button variant="contained" color="secondary">
                likes
              </Button>
              <Button variant="contained" color="secondary">
                views
              </Button>
            </Box>
          </Stack>

          <Stack
            style={{ width: "100%", display: "flex", minHeight: "600px" }}
            flexDirection={"row"}
          >
            <Stack className="dish_category_box">
              <div className="dish_category_main">
                <Button variant="contained" color="secondary">
                  boshqa
                </Button>
                <Button variant="contained" color="secondary">
                  desert
                </Button>
                <Button variant="contained" color="secondary">
                  ichimlik
                </Button>
                <Button variant="contained" color="secondary">
                  salad
                </Button>
                <Button variant="contained" color="secondary">
                  ovqatlar
                </Button>
              </div>
            </Stack>

            <Stack className="dish_wrapper">
              {targetProducts.map((product: Product) => {
                const image_path = `${serviceApi}/${product.product_images[0]}`;
                const size_volume =
                  product.product_collection === "drinks"
                    ? product.product_volume + ".L"
                    : product.product_size + " size";
                    console.log("Imageeeee::",product.product_images)
                return (
                  <Box className="dish_box" key={product._id}>
                    <Box
                      className="dish_img"
                      sx={{
                        backgroundImage: `url(${image_path})`,
                      }}
                    >
                      <div className="dish_sale">{size_volume}</div>
                      <Button
                        className="like_view_btn"
                        style={{ left: "36px" }}
                      >
                        <Badge
                          badgeContent={product.product_likes}
                          color="primary"
                        >
                          <CheckBox
                            icon={<FavoriteBorder style={{ color: "white" }} />}
                            id={product._id}
                            checkedIcon={<Favorite style={{ color: "red" }} />}
                            checked={
                              product?.me_liked &&
                              product?.me_liked[0]?.my_favorite
                                ? true
                                : false
                            }
                          />
                        </Badge>
                      </Button>
                      <Button className="view_btn">
                        <img
                          src="/icons/shopping_card.svg"
                          alt="shopping_card"
                          style={{ display: "flex" }}
                        />
                      </Button>
                      <Button
                        className="like_view_btn"
                        style={{ right: "36px" }}
                      >
                        <Badge
                          badgeContent={product.product_views}
                          color="primary"
                        >
                          <CheckBox
                            icon={
                              <RemoveRedEyeIcon style={{ color: "white" }} />
                            }
                          />
                        </Badge>
                      </Button>
                    </Box>
                    <Box className="dish_desc">
                      <span className="dish_title_text">
                        {product.product_name}
                      </span>
                      <div className="dish_desc_text">
                        <MonetizationIcon />
                        {product.product_price}
                      </div>
                    </Box>
                  </Box>
                );
              })}
            </Stack>
          </Stack>
        </Stack>
      </Container>

      <div className="review_for_restaurant">
        <Container
          // sx={{ mt: "100px" }}
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Box className="category_title"></Box>
          <Stack
            flexDirection={"row"}
            display={"flex"}
            justifyContent={"space-between"}
            width={"100%"}
          >
            {Array.from(Array(4).keys()).map((ele, index) => {
              return (
                <Box className="review_box" key={index}>
                  <Box display={"flex"} justifyContent={"center"}>
                    <img
                      className="review_img"
                      src="/community/Sami_Yusuf.jpg"
                      alt="Customer_img"
                    />
                  </Box>
                  <span className="review_name">Sami Yusuf</span>
                  <span className="review_prof">Foydalanuvchi</span>
                  <p className="review_desc">
                    I have become a regular customer since the day I ate at this
                    restaurant for the first time. You should also visit.
                  </p>
                  <div className="review_stars">
                    <StarIcon style={{ color: "f2bd57" }} />
                    <StarIcon style={{ color: "f2bd57" }} />
                    <StarIcon style={{ color: "f2bd57" }} />
                    <StarIcon style={{ color: "whitesmoke" }} />
                    <StarIcon style={{ color: "whitesmoke" }} />
                  </div>
                </Box>
              );
            })}
          </Stack>
        </Container>
      </div>

      <Container className="membrer_reviews">
        <Box className="category_title">Oshxona Haqida</Box>
        <Stack
          display={"flex"}
          flexDirection={"row"}
          width={"90%"}
          sx={{ mt: "70px" }}
        >
          <Box
            className="about_left"
            sx={{
              backgroundImage: `url("/restaurant/Burak_restaurant_view.jpg")`,
            }}
          >
            <div className="about_left_desc">
              <span>Burak CNZ</span>
              <p>Turk Oshxona brendi</p>
            </div>
          </Box>
          <Box className="about_right">
            {Array.from(Array(3).keys()).map((ele, index) => {
              return (
                <Box display={"flex"} flexDirection={"row"} key={index}>
                  <div className="about_right_img"></div>
                  <div className="about_right_desc">
                    <span>Bizning mohir va kreativ oshpazlarimiz</span>
                    <p>
                      Burak CNZ: Bizning jamoadagi har bir oshpaz mijoz tabini
                      toba bilishi kerak.
                    </p>
                  </div>
                </Box>
              );
            })}
          </Box>
        </Stack>

        <Box className="category_title">Oshxona Manzili</Box>
        <iframe
          style={{ marginTop: "60px", marginBottom: "50px" }}
          title="This is a unique title"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3006.3245770469684!2d28.984466575749938!3d41.10560191342703!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14cab56ac7ff7009%3A0x84c6097c80637640!2sCzn%20Burak%20Vadi%20%C4%B0stanbul!5e0!3m2!1sru!2skr!4v1700656539501!5m2!1sru!2skr"
          width="1320px"
          height="600px"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </Container>
    </div>
  );
}
