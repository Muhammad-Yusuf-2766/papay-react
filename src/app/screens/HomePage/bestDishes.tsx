import { MonetizationOn } from "@mui/icons-material";
import { Box, Container, Stack } from "@mui/material";
import React, { useEffect } from "react";
// REDUX
import { useDispatch } from "react-redux";
import { Dispatch } from "@reduxjs/toolkit";
import { setTrendProducts } from "../../screens/HomePage/slice";
import { Product } from "../../../types/product";
import ProductApiService from "../../ApiServices/productApiService";
import { retrieveTrendProducts } from "./selector";
import { createSelector } from "reselect";
import { useSelector } from "react-redux";
import { serviceApi } from "../../../lib/config";

//===== Redux Slice ===== //

const actionDispatch = (dispach: Dispatch) => ({
  setTrendProducts: (data: Product[]) => dispach(setTrendProducts(data)),
});

//===== Redux Selector ===== //
const trendProductsRetriever = createSelector(
  retrieveTrendProducts,
  (trendProducts) => ({
    trendProducts,
  })
);

export function BestDishes() {
  //===== Initialization ===== //
  const { setTrendProducts } = actionDispatch(useDispatch());
  const { trendProducts } = useSelector(trendProductsRetriever);
  useEffect(() => {
    const productService = new ProductApiService();
    productService
      .getTargetProducts({ order: "product_likes", page: 1, limit: 4 })
      .then((data) => setTrendProducts(data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="best_dishes_frame">
      <Container>
        <Stack flexDirection={"column"} alignItems={"center"}>
          <Box className="category_title">Trenddagi Ovqatlar</Box>
          <Stack sx={{ mt: "43px" }} flexDirection={"row"}>
            {trendProducts.map((product: Product) => {
              const image_path = `${serviceApi}/${product.product_images[0]}`;
              const size_volume =
                product.product_collection === "drinks"
                  ? product.product_volume + "L"
                  : product.product_size + "Size";
              return (
                <Box className="dish_box">
                  <Stack
                    className="dish_img"
                    sx={{ backgroundImage: `url(${image_path})` }}
                  >
                    <div className="dish_sale">{size_volume}</div>
                    <div className="view_btn">
                      Batafsil Ko'rish
                      <img
                        src="icons/Arrow-right.svg"
                        style={{ marginLeft: "9px" }}
                        alt=""
                      />
                    </div>
                  </Stack>
                  <Stack className="dish_desc">
                    <span className="dish_title_text">{product.product_name}</span>
                    <span className="dish_desc_text">
                      <MonetizationOn />
                      {product.product_price}
                    </span>
                  </Stack>
                </Box>
              );
            })}
          </Stack>
        </Stack>
      </Container>
    </div>
  );
}
