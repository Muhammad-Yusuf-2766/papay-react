import { createSelector } from "@reduxjs/toolkit";
import { AppRootState } from "../../../types/screen";

const selectRestaurantPage = (state: AppRootState) => state.restauranPage;
export const retrieveTargetRestaurants = createSelector(
    selectRestaurantPage, (RestaurantPage) => RestaurantPage.targetRestaurants
);
export const retrievetRandomRestaurants = createSelector(
    selectRestaurantPage, (RestaurantPage) => RestaurantPage.randomRestaurants
);
export const retrieveChosenRestaurant = createSelector(
    selectRestaurantPage, (RestaurantPage) => RestaurantPage.chosenRestaurant
);
export const retrieveTargetProducts = createSelector(
    selectRestaurantPage, (RestaurantPage) => RestaurantPage.targetProducts
);
export const retrieveChosenProduct = createSelector(
    selectRestaurantPage, (RestaurantPage) => RestaurantPage.chosenProduct
);