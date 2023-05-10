import React from 'react'
import { BsFillSunFill, BsMoon } from 'react-icons/bs'

export default function SideBarFooter() {
    return (
        <>
            <div className='sidebar-footer w-100'>
                <div className='button-theme d-flex w-70 background-light p-5'>
                    <button className='background-light text-gray-2 d-flex'>
                        <h3 className='p-10'>تاریک</h3>
                        <BsMoon className='p-10' />
                    </button>
                    <button className='background-light text-gray-2 active d-flex'>
                        <h3 className='p-10'>روشن</h3>
                        <BsFillSunFill className='p-10' />
                    </button>
                </div>
                <div className='web-developer w-100 mt-20'>
                    <p className='p-10 text-gray'>CodeLand Group</p>
                </div>
            </div>
        </>
    )
}