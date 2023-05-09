import React from 'react'
import Item from '../../CommonElements/Gird/Item'
import SideBarHeader from './Header/SideBarHeader'
import '../../assets/css/SideBar/SideBar.css'

export default function SideBar() {
    return (
        <>
            <Item className="sidebar" sx={{ gridRow: '1', gridColumn: '18/18' }}>
                <SideBarHeader />
                
            </Item>
        </>
    )
}
