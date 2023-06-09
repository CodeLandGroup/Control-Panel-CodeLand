import React from 'react'
import { RiBarChartLine, RiLoginBoxLine } from 'react-icons/ri'
import { useDispatch, useSelector } from 'react-redux';
import { IsSmall, selectSmallSideBarData } from '../../../Reduxe/Slice/SideBar/SmallSideBarSlice.js';
import { sidebarListData } from '../../../Reduxe/Slice/SideBar/SideBarListSlice.js';

export default function SideBarHeader() {
    const smallSideBar = useSelector(selectSmallSideBarData);
    const sidebarList = useSelector(sidebarListData);
    const dispatch = useDispatch();
    return (
        <>
            <div className={'sidebar-header position-relative background-default d-flex p-10 color-white transition' + smallSideBar.className}>
                {sidebarList.icon}
                <h3 className={'p-10 transition' + smallSideBar.display}>{sidebarList.title}</h3>
                <RiLoginBoxLine onClick={() => dispatch(IsSmall())} className={'p-10 position-absolute mt-20 transition' + smallSideBar.className} />
            </div>
        </>
    )
}