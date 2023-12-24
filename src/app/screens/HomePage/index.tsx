import React, { useEffect } from "react";
import { Statistics } from "./statistics";
import { TopRestaurants } from "./topRestaurant";
import { BestRestaurants } from "./bestRestaurant";
import { BestDishes } from "./bestDishes";
import { Advertisements } from "./advertisement";
import { Events } from "./events";
import { Recommendations } from "./recommendations";

// REDUX
import { useDispatch, useSelector } from "react-redux";
import { Dispatch } from "@reduxjs/toolkit";
import { createSelector } from "reselect";
import { setTopRestaurants } from "../../screens/HomePage/slice";
import { retrieveTopRestaurants } from "../../screens/HomePage/selector";
import { Restaurant } from "../../../types/user";
import RestaurantApiService from "../../ApiServices/restaurantApiService";

//===== Redux Slice ===== //

const actionDispatch = (dispach: Dispatch) => ({
  setTopRestaurants: (data: Restaurant[]) => dispach(setTopRestaurants(data)),
});
//===== Redux Selector ===== //
const topRestaurantRetriever = createSelector(
  retrieveTopRestaurants,
  (topRestaurants) => ({
    topRestaurants,
  })
);

export function HomePage() {
  //===== Initialization ===== //
  const { setTopRestaurants } = actionDispatch(useDispatch());

  // Selector: store => data

  useEffect(() => {
    // backend data request => data

    const restaurantService = new RestaurantApiService();
    restaurantService.getToprestaurants().then(data => {
      setTopRestaurants(data);
    }).catch(error => console.log(error))
    // slice = data => store
  }, []);

  return (
    <div className="homepage">
      <Statistics />
      <TopRestaurants />
      <BestRestaurants />
      <BestDishes />
      <Advertisements />
      <Events />
      <Recommendations />
    </div>
  );
}
