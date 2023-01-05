import { configureStore } from "@reduxjs/toolkit";
import BannerReducer from './reducers/BannerReducer'
import UserReducer from './reducers/UserReducer'
import FilmReducer from "./reducers/FilmReducer";
import CinemaReducer from "./reducers/CinemaReducer";
import BookingReducer from "./reducers/BookingReducer";

export const store = configureStore({
  reducer: {
    BannerReducer,
    UserReducer,
    FilmReducer,
    CinemaReducer,
    BookingReducer,

  }
})




//redux
// import { combineReducers, createStore } from 'redux';
// import { DemoReducer } from './reducers/DemoReducer';

// const rootReducer = combineReducers({
//   DemoReducer
// })

// export const store = createStore(rootReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());