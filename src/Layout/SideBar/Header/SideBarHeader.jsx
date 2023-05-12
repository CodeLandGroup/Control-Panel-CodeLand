import React from 'react'
import { RiBarChartLine, RiLoginBoxLine } from 'react-icons/ri'

export default function SideBarHeader() {
    return (
        <>
            <div className='sidebar-header position-relative background-default d-flex p-10 color-white'>
                <RiBarChartLine className='p-10 mt-20'/>
                <h3 className='p-10'>داشبورد</h3>
                <RiLoginBoxLine  className='p-10 position-absolute mt-20'/>
            </div>
        </>
    )
}
