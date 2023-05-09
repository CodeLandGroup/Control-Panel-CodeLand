import React from 'react'
import { RiBarChartLine, RiLoginBoxLine } from 'react-icons/ri'

export default function SideBarHeader() {
    return (
        <>
            <div className='sidebar-header background-default d-flex p-10 color-white'>
                <RiBarChartLine className='p-10'/>
                <h3 className='p-10 mt-5'>Dashboard</h3>
                <RiLoginBoxLine  className='p-10'/>
            </div>
        </>
    )
}
