import { BoArticle } from "./boArticle";
import { Product } from "./product";
import { Restaurant } from "./user";
import PausedOrders from '../app/components/orders/pausedOrders';
import ProcessOrders from '../app/components/orders/processOrder';
import FinishedOrders from '../app/components/orders/finishedOrders';
import { Order } from "./order";

// React App State
export interface AppRootState {
    homePage: HomePageState;
    restauranPage: RestaurantPageState,
    ordersPage: OrdersPageState
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

// Orders-Page State
export interface OrdersPageState {
    pausedOrders: Order[],
    processOrders: Order[],
    finishedOrders: Order[]
}
