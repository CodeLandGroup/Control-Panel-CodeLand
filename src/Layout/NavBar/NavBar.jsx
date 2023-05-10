import React from 'react'
import Item from '../../CommonElements/Gird/Item'
import '../../assets/css/NavBar/navbar.css'
import NavBarSearchBox from './NavBarSerchBox/NavBarSearchBox'

export default function NavBar() {
    return (
        <>
            <Item className="navbar d-flex" sx={{ gridRow: '1', gridColumn: '1/2' }}>
                <div className='navbar-title w-50'>
                    <h3 className='text-gray-2'>بخش داشبورد</h3>
                </div>
                <NavBarSearchBox/>
            </Item>
        </>
    )
}
