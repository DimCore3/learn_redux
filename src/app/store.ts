import { configureStore } from "@reduxjs/toolkit";
import counterReducer from '../features/counter/counterSlice';
import spinnerReducer from '../features/spinner/spinnerSlice';
import boxReducer from '../features/box/boxSlice';
import mirrorReducer from '../features/mirror/mirrorSlice';
import textMessageReducer from '../features/textMessage/textMessageSlice';
import bottleReducer from '../features/bottle/bottleSlice';

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    spinner: spinnerReducer,
    boxPosition: boxReducer,
    mirror: mirrorReducer,
    textMessage: textMessageReducer,
    bottle: bottleReducer,
  }
})