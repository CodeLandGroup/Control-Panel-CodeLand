import React from 'react'
import { RiBarChartLine, RiArrowLeftSLine, RiGroupFill, RiEqualizerFill } from "react-icons/ri";
import { useSelector } from 'react-redux';
import { selectSmallSideBarData } from '../../../Reduxe/Slice/SideBar/SmallSideBarSlice.js';

export default function SideBarMain() {
    const smallSideBar = useSelector(selectSmallSideBarData);
    return (
        <>
            <div className='sidebar-main'>
                <ul>
                    <li className='main-item position-relative'>
                        <a href="#" className={'transition d-flex text-gray-2 text-center w-100 mt-20' + smallSideBar.className}>
                            <RiBarChartLine className='w-25 text-center' />
                            <h3 className={'w-50 text-center mt-5' + smallSideBar.display}>داشبورد</h3>
                            <RiArrowLeftSLine className={'w-25 text-end' + smallSideBar.display} />
                        </a>
                    </li>
                    <li className='main-item position-relative'>
                        <a href="#" className={'transition d-flex text-gray-2 text-center w-100 mt-20' + smallSideBar.className}>
                            <RiGroupFill className='w-25 text-center' />
                            <h3 className={'w-50 text-center mt-5' + smallSideBar.display}>گزارشات</h3>
                            <RiArrowLeftSLine className={'w-25 text-end' + smallSideBar.display} />
                        </a>
                    </li>
                    <li className='main-item position-relative'>
                        <a href="#" className={'transition d-flex text-gray-2 text-center w-100 mt-20' + smallSideBar.className}>
                            <RiEqualizerFill className='w-25 text-center' />
                            <h3 className={'w-50 text-center mt-5' + smallSideBar.display}>مدیریت</h3>
                            <RiArrowLeftSLine className={'w-25 text-end' + smallSideBar.display} />
                        </a>
                    </li>
                </ul>
            </div>
        </>
    )
}
