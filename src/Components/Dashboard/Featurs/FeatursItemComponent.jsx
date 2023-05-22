import React from 'react'
import {AiOutlineArrowDown} from 'react-icons/ai'
export default function FeatursItemComponent(props) {
    return (
        <div className='featurs-item background-dark dark-color-white mt-30'>
            <div className='featurs-title'>
                <h3>{props.title}</h3>
            </div>
            <div className='featurs-range'>
                <span className='featurs-price'>
                    25,000
                </span>
                <div className='featurs-info'>
                    <span>11.4-</span>
                    <i><AiOutlineArrowDown className="featurs-icon-down" /></i>
                </div>
            </div>
            <span className='featurs-sub'>نسبت به ماه گذشته</span>
        </div>
    )
}
