import { BoArticle } from "./boArticle";
import { Product } from "./product";
import { Restaurant } from "./user";

// React App State
export interface AppRootState {
    homePage: HomePageState;
    restauranPage: RestaurantPageState
}

// Homepage State
export interface HomePageState {
    topRestaurants: Restaurant[],
    bestRestaurants: Restaurant[],
    trendProducts: Product[],
    bestBoArticles: BoArticle[],
    trendBoArticles: BoArticle[],
    newsBoArticles: BoArticle[]
}

// RestaurantPage
export interface RestaurantPageState {
    targetRestaurants: Restaurant[],
    randomRestaurants: Restaurant[],
    chosenRestaurant: Restaurant | null,
    targetProducts: Product[],
    chosenProduct: Product | null
}
