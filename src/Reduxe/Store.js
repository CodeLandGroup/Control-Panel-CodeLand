import { configureStore } from "@reduxjs/toolkit";
import smallSideBarReducer from './Slice/SideBar/SmallSideBarSlice'
import sidebarListReducer from "./Slice/SideBar/SideBarListSlice";

const store = configureStore({
    reducer: {
        smallSideBar: smallSideBarReducer,
        sidebarList: sidebarListReducer,
    }
});

export default store;