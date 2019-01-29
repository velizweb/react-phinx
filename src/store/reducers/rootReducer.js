import authReducer from "./authReducer";
import carReducer from "./carReducer";
import { combineReducers } from "redux";

const rootReducer = combineReducers({
  auth: authReducer,
  cars: carReducer
});

export default rootReducer;
