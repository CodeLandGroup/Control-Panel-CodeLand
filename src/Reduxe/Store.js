import { configureStore } from "@reduxjs/toolkit";
import smallSideBarReducer from './Slice/SideBar/SmallSideBarSlice'

const store = configureStore({
    reducer: {
        smallSideBar: smallSideBarReducer
    }
});

export default store;