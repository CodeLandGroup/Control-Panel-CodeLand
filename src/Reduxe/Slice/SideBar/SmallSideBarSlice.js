import { createSlice } from "@reduxjs/toolkit";

export const smallSideBarSlice = createSlice({
    name: 'smallSideBar',
    initialState: {
        isSmall: false,
        display: '',
        className: ''
    },
    reducers: {
        IsSmall: (state) => {
            state.isSmall = !state.isSmall;
            state.display = state.display == '' ? ' d-none' : '';
            state.className = state.className == '' ? ' small' : '';
        }
    }
});

export const { IsSmall } = smallSideBarSlice.actions
export const selectSmallSideBarData = (state) => state.smallSideBar
export default smallSideBarSlice.reducer