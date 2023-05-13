import React from 'react'
import { RiBarChartLine, RiLoginBoxLine } from 'react-icons/ri'
import { useDispatch, useSelector } from 'react-redux';
import { IsSmall, selectSmallSideBarData } from '../../../Reduxe/Slice/SideBar/SmallSideBarSlice.js';

export default function SideBarHeader() {
    const smallSideBar = useSelector(selectSmallSideBarData);
    const dispatch = useDispatch();
    return (
        <>
            <div className={'sidebar-header position-relative background-default d-flex p-10 color-white transition' + smallSideBar.className}>
                <RiBarChartLine className='p-10 mt-20' />
                <h3 className={'p-10 transition' + smallSideBar.display}>داشبورد</h3>
                <RiLoginBoxLine onClick={() => dispatch(IsSmall())} className={'p-10 position-absolute mt-20 transition' + smallSideBar.className} />
            </div>
        </>
    )
}