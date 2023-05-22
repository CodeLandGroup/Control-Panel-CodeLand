import React from 'react'
import { useSelector } from 'react-redux';
import { selectSmallSideBarData } from '../../../Reduxe/Slice/SideBar/SmallSideBarSlice.js';


export default function SideBarProfile() {
    const smallSideBar = useSelector(selectSmallSideBarData);
    return (
        <>
            <div className='sidebar-profile w-100'>
                <div className='profile-img w-100 position-relative'>
                    <img className={'transition position-absolute p-10 background-white background-dark'+smallSideBar.className} src={require('../../../assets/Images/avatar/man.png')}></img>
                </div>
                <div className={'profile-title w-100  text-center'}>
                    <h2 className={smallSideBar.display + ' dark-color-white'}>Mostafa Abedini</h2>
                    <p className={'mt-5 text-gray color-dark ' + smallSideBar.display}>fullstack developer</p>
                </div>
            </div>
        </>
    )
}