import React from 'react'
import { UserData } from '../../../assets/Data/UserData'
import UserPreviewComponent from './UserPreviewComponent'
import '../../../assets/css/NewMemberPreview/NewMemberPreview.css'
export default function NewMembersPreviewComponent() {
    return (
        <div className='member-widget container'>
            <h3>New Join Member</h3>
            <div className='user-list'>
                {
                    UserData.map((user)=>(
                        <UserPreviewComponent data={user}/>
                    )
                   
                    )
                }
               
            </div>
        </div>
    )
}
