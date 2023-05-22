import React from 'react'
import Item from '../../CommonElements/Gird/Item'
import '../../assets/css/NavBar/navbar.css'
import NavBarSearchBox from './NavBarSerchBox/NavBarSearchBox'
import { sidebarListData } from '../../Reduxe/Slice/SideBar/SideBarListSlice';
import { useSelector } from 'react-redux';

export default function NavBar() {
    const sidebarList = useSelector(sidebarListData);

    return (
        <>
            <Item className="navbar d-flex background-dark transition" sx={{ gridRow: '1', gridColumn: '1/2' }}>
                <div className='navbar-title w-50'>
                    <h3 className='text-gray-2 mt-10 dark-color-white'>بخش {sidebarList.title}</h3>
                </div>
                <NavBarSearchBox/>
            </Item>
        </>
    )
}
