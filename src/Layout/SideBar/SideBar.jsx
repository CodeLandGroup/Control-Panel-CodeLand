import React from 'react'
import Item from '../../CommonElements/Gird/Item'
import SideBarHeader from './Header/SideBarHeader'
import SideBarProfile from './Header/SideBarProfile'
import '../../assets/css/SideBar/SideBar.css'
import SideBarMain from './SideBarMain/SideBarMain'

export default function SideBar() {
    return (
        <>
            <Item className="sidebar" sx={{ gridRow: '1', gridColumn: '18/18' }}>
                <SideBarHeader />
                <SideBarProfile />
                <SideBarMain />
            </Item>
        </>
    )
}
