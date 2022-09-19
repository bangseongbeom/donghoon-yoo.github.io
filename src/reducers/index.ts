import { combineReducers } from "redux";
import theme from "./theme";
import navigationMenu from "./navigation/menu";

const rootReducer = combineReducers({
  theme,
  navigationMenu,
});

export default rootReducer;
