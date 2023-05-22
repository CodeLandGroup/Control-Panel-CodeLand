import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import '../../../assets/css/LatestTransActions/LatestTransActions.css'
import TransActionItem from './TransActionItem';
export default function LatestTransAction() {

    return (
        <div className='Latest-TransAction background-white background-dark dark-color-white transition'>
            <h3 className='TransAction-title'>
                آخرین تراکنش ها
            </h3>
            <table>
                <tr className='transAction-row'>
                    <th className='background-icon-dark'>نام کاربر</th>
                    <th className='background-icon-dark'>تاریخ پرداخت</th>
                    <th className='background-icon-dark'>مبلغ پرداخت</th>
                    <th className='background-icon-dark'>وضعیت</th>
                </tr>
               <TransActionItem name="امیر محمد عرب خزایلی" className="succes"/>
               <TransActionItem name="مصطفی عابدینی" className="Unsuccessful"/>
               <TransActionItem name="پارسا محمودی" className="succes"/>
               <TransActionItem name="علی کریمی" className="succes"/>
               <TransActionItem name="محمد عباسی" className="Unsuccessful"/>
               <TransActionItem name="ساسان حمیدی" className="succes"/>
            </table>
        </div>
    )
}
