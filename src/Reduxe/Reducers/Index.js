import { combineReducers } from "@reduxjs/toolkit";
import SideBarReducer from "./SideBar/SideBarReducer";

export default combineReducers({
    sideBarState: SideBarReducer,
})