import React from 'react'
import { RiBarChartLine, RiArrowLeftSLine, RiGroupFill, RiEqualizerFill } from "react-icons/ri";
import { useDispatch, useSelector } from 'react-redux';
import { selectSmallSideBarData } from '../../../Reduxe/Slice/SideBar/SmallSideBarSlice.js';
import { changeSideBarSelected } from '../../../Reduxe/Slice/SideBar/SideBarListSlice.js';

export default function SideBarMain() {
    const smallSideBar = useSelector(selectSmallSideBarData);
    const dispatch = useDispatch();
    return (
        <>
            <div className='sidebar-main'>
                <ul>
                    <li className='main-item position-relative'
                        onClick={() => dispatch(changeSideBarSelected({ title: 'داشبورد', icon: <RiBarChartLine className='p-10 mt-20'/> }))}>
                        <a href="#" className={'transition d-flex text-gray-2 text-center w-100 mt-20 dark-color-white' + smallSideBar.className}>
                            <RiBarChartLine className='w-25 text-center' />
                            <h3 className={'w-50 text-center mt-5' + smallSideBar.display}>داشبورد</h3>
                            <RiArrowLeftSLine className={'w-25 text-end' + smallSideBar.display} />
                        </a>
                    </li>
                    <li className='main-item position-relative'
                        onClick={() => dispatch(changeSideBarSelected({ title: 'گزارشات', icon: <RiGroupFill className='p-10 mt-20' /> }))}>
                        <a href="#" className={'transition d-flex text-gray-2 text-center w-100 mt-20 dark-color-white' + smallSideBar.className}>
                            <RiGroupFill className='w-25 text-center' />
                            <h3 className={'w-50 text-center mt-5' + smallSideBar.display}>گزارشات</h3>
                            <RiArrowLeftSLine className={'w-25 text-end' + smallSideBar.display} />
                        </a>
                    </li>
                    <li className='main-item position-relative'
                        onClick={() => dispatch(changeSideBarSelected({ title: 'مدیریت', icon: <RiEqualizerFill className='p-10 mt-20' /> }))}>

                        <a href="#" className={'transition d-flex text-gray-2 text-center w-100 mt-20 dark-color-white' + smallSideBar.className}>
                            <RiEqualizerFill className='w-25 text-center' />
                            <h3 className={'w-50 text-center mt-5' + smallSideBar.display}>مدیریت</h3>
                            <RiArrowLeftSLine className={'w-25 text-end' + smallSideBar.display} />
                        </a>
                    </li>
                </ul>
            </div >
        </>
    )
}
