import { combineReducers } from "@reduxjs/toolkit";
import counterReducer from "./counterSlice";
import otherReducer from "./otherReducer";

const rootReducer = combineReducers({
  counter: counterReducer,
  other: otherReducer,
});

export default rootReducer;
