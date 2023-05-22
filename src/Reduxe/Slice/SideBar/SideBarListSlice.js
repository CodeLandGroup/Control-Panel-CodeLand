import { createSlice } from "@reduxjs/toolkit";
import { RiBarChartLine, RiArrowLeftSLine, RiGroupFill, RiEqualizerFill } from "react-icons/ri";

export const sidebarListSlice = createSlice({
    name: 'sidebarList',
    initialState: {
        title: 'داشبورد',
        icon: <RiBarChartLine className='p-10 mt-20' />,
    },
    reducers: {
        changeSideBarSelected: (state, target) => {
            return target.payload;
        }
    }
});

export const { changeSideBarSelected } = sidebarListSlice.actions
export const sidebarListData = (state) => state.sidebarList
export default sidebarListSlice.reducer