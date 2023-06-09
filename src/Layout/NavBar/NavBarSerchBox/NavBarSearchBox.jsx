import React from 'react'
import { VscSearch, VscGripper } from 'react-icons/vsc'
export default function NavBarSearchBox() {
    return (
        <>
            <div className='search-box w-50 text-end position-relative p-10 text-gray-2'>
                <VscSearch className='position-absolute search-icon dark-color-white' />
                <input type="search" name="" className='search p-10 background-light w-60 background-icon-dark' id="" placeholder='جست و جو کنید ...' />
                <div className='search-button position-absolute'>
                    <button className='d-flex text-gray-2 transition background-dark dark-color-white'>
                        <h2 className='p-10'>تایید</h2>
                        <VscGripper/>
                    </button>
                </div>
            </div>
        </>
    )
}
