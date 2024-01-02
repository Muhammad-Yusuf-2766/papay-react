import { configureStore, ThunkAction, Action, } from '@reduxjs/toolkit';
import HomePageReducer from './screens/HomePage/slice'
import reduxLogger from "redux-logger"
import { RestaurantPage } from './screens/RestaurantPage/index';
import RestaurantPageReducer from './screens/RestaurantPage/slice';


export const store = configureStore({
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(reduxLogger),
  reducer: {
    homePage: HomePageReducer,
    restauranPage: RestaurantPageReducer
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
