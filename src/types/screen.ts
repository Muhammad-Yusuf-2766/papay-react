import { BoArticle } from "./boArticle";
import { Product } from "./product";
import { Member, Restaurant } from "./user";
import PausedOrders from '../app/components/orders/pausedOrders';
import ProcessOrders from '../app/components/orders/processOrder';
import FinishedOrders from '../app/components/orders/finishedOrders';
import { Order } from "./order";
import { Follower, Following } from "./follow";

// React App State
export interface AppRootState {
    homePage: HomePageState;
    restauranPage: RestaurantPageState,
    ordersPage: OrdersPageState,
    communityPage: CommunityPageState,
    memberPage: MemberPageState
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


/**COMMUNITY PAGE */
export interface CommunityPageState {
    targetBoArticles: BoArticle[];
  }
  
  //Member page
  export interface MemberPageState {
    chosenMember: Member | null;
    chosenMemberBoArticles: BoArticle[];
    chosenSingleBoArticles: BoArticle | null;
    memberFollowers: Follower[];
    memberFollowings: Following[];
  }