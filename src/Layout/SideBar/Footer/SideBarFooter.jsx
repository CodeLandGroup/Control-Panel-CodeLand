import React, { useState } from 'react'
import { BsFillSunFill, BsMoon } from 'react-icons/bs'
import { useSelector } from 'react-redux';
import { selectSmallSideBarData } from '../../../Reduxe/Slice/SideBar/SmallSideBarSlice.js';

export default function SideBarFooter() {
    const smallSideBar = useSelector(selectSmallSideBarData);
    const [isDark, setIsDark] = useState(false);

    function ChangeTheme(isDark) {

        let theme = isDark ? 'dark' : 'light';
        let getLinkTags = document.getElementsByTagName('link');
        console.log(getLinkTags);
        for (let index = 0; index < getLinkTags.length; index++) {
            if (getLinkTags[index].getAttribute('theme'))
                getLinkTags[index].remove();
        }
        let style = document.createElement('link');
        style.type = "text/css";
        style.rel = "stylesheet";
        style.setAttribute('theme', theme);
        style.href = 'Theme/' + theme + '.css';
        document.head.appendChild(style);
        setIsDark(isDark);
    }
    return (
        <>
            <div className={'sidebar-footer w-100' + smallSideBar.display}>
                <div className='button-theme d-flex w-85 background-light p-5 background-icon-dark'>
                    <button className={isDark ? 'active background-light text-gray-2 dark-background  d-flex dark-color-white'
                        : 'background-light text-gray-2  d-flex dark-background dark-color-white'} onClick={() => ChangeTheme(true)}>
                        <h3 className='p-10'>تاریک</h3>
                        <BsMoon className='p-10' />
                    </button>
                    <button className={isDark ? 'background-light text-gray-2  d-flex dark-color-white background-icon-dark'
                        : ' active background-light text-gray-2  d-flex  dark-color-white '} onClick={() => ChangeTheme(false)}>
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
