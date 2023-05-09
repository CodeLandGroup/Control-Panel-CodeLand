import React from 'react'


export default function SideBarProfile() {
    return (
        <>
            <div className='sidebar-profile w-100'>
                <div className='profile-img w-100 position-relative'>
                    <img className='position-absolute p-10 background-white' src={require('../../../assets/Images/avatar/man.png')}></img>
                </div>
                <div className='profile-title w-100  text-center'>
                    <h2 >Mostafa Abedini</h2>
                    <p className='mt-5 text-gray'>fullstack developer</p>
                </div>
            </div>
        </>
    )
}
