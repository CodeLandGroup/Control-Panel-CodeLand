import React from 'react'
import '../../../assets/css/Featurs/Featurs.css'
import FeatursItemComponent from './FeatursItemComponent'
export default function FeatursComponent() {
    return (
        <div className='featurs container'>
         <FeatursItemComponent title='فروش' />
         <FeatursItemComponent title='بازدید' />
         <FeatursItemComponent  title="پرداخت" />
        </div>
    )
}

