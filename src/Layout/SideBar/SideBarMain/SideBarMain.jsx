import React from 'react'
import { RiBarChartLine, RiArrowLeftSLine,RiGroupFill,RiEqualizerFill } from "react-icons/ri";

export default function SideBarMain() {
    return (
        <>
            <div className='sidebar-main'>
                <ul>
                    <li className='main-item'>
                        <a href="#" className='d-flex text-gray-2 text-center w-100 mt-20'>
                            <RiBarChartLine className='w-25 text-center' />
                            <h3 className='w-50 text-center mt-5'>داشبورد</h3>
                            <RiArrowLeftSLine className='w-25 text-end' />
                        </a>
                    </li>
                    <li className='main-item'>
                        <a href="#" className='d-flex text-gray-2  text-center w-100 mt-20'>
                            <RiGroupFill className='w-25 text-center' />
                            <h3 className='w-50 text-center mt-5'>مدیرت کاربران</h3>
                            <RiArrowLeftSLine className='w-25 text-end' />
                        </a>
                    </li>
                    <li className='main-item'>
                        <a href="#" className='d-flex text-gray-2 text-center w-100 mt-20'>
                            <RiEqualizerFill className='w-25 text-center' />
                            <h3 className='w-50 text-center mt-5'>مدیریت پست</h3>
                            <RiArrowLeftSLine className='w-25 text-end' />
                        </a>
                    </li>
                </ul>
            </div>
        </>
    )
}
