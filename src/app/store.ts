import { configureStore, ThunkAction, Action, } from '@reduxjs/toolkit';
import HomePageReducer from './screens/HomePage/slice'
import reduxLogger from "redux-logger"
import RestaurantPageReducer from './screens/RestaurantPage/slice';
import { OrdersPage } from './screens/OrdersPage/index';
import OrdersPageReducer from './screens/OrdersPage/slice';
import CommunityPageReducer from './screens/CommunityPage/slice';


export const store = configureStore({
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(reduxLogger),
  reducer: {
    homePage: HomePageReducer,
    restauranPage: RestaurantPageReducer,
    ordersPage: OrdersPageReducer,
    communityPage: CommunityPageReducer
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
