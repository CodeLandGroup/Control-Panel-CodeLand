import React from 'react'
import { AiOutlineEye } from 'react-icons/ai'
export default function UserPreviewComponent(props) {
    return (
        <div className='user-preview'>
            <img src={props.img} alt="" />
            <div className='user-info'>
                <h3 className='user-name'>{props.data.name}</h3>
                <span className='user-job'>{props.data.job}</span>
            </div>
            <i>
                <AiOutlineEye />
            </i>
        </div>
    )
}
