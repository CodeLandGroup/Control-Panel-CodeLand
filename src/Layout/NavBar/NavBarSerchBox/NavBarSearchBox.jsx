import React from 'react'
import { VscSearch, VscFilterFilled } from 'react-icons/vsc'
export default function NavBarSearchBox() {
    return (
        <>
            <div className='search-box w-50 text-end position-relative p-10 text-gray-2'>
                <VscSearch className='position-absolute search-icon' />
                <input type="search" name="" className='search p-10 background-light w-60' id="" placeholder='جست و جو کنید ...' />
                <div className='search-button position-absolute'>
                    <button className='d-flex text-gray-2'>
                        <h2 className='p-5'>تایید</h2>
                        <VscFilterFilled className='p-5'/>
                    </button>
                </div>
            </div>
        </>
    )
}
