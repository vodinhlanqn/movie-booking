//redux toolkit
import { configureStore } from '@reduxjs/toolkit'
// import demoReducer from './reducers/demoReducer';
import carouselReducer from './reducers/carouselReducer';
import userReducer from './reducers/userReducer';


export const store = configureStore({
  reducer: {
    // demoReducer,
    carouselReducer,
    userReducer,
  },
})



//redux
// import { combineReducers, createStore } from 'redux';
// import { DemoReducer } from './reducers/DemoReducer';

// const rootReducer = combineReducers({
//   DemoReducer
// })

// export const store = createStore(rootReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());