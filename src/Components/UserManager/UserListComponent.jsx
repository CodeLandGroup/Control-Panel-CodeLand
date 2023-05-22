import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
import { MdDelete } from 'react-icons/md'
import '../../assets/css/userManager/userManager.css'

function createData(
    img: string,
    calories: number,
    fat: number,
    carbs: number,
    protein: number,
) {
    return { img, calories, fat, carbs, protein };
}

const rows = [
    createData(require('../../assets/Images/avatar/man.png'), '0944233243443', 'kazemkohi@gmail.com', 'کاظم', 1),
    createData(require('../../assets/Images/avatar/wonan.png'), '4234234234324', 'khazaeli7amir@gmail.com', 'امیر محمد', 2),
    createData(require('../../assets/Images/avatar/man.png'), '093434343434', 'sadeghhastam@gmail.com', 'صادق', 3),
    createData(require('../../assets/Images/avatar/man.png'), '0944432244343', 'hoseinkogi@gmail.com', 'حسین', 4),
    createData(require('../../assets/Images/avatar/wonan.png'), '09932337393', 'mostafaabedinima14@gmail.com', 'مصطفی', 5),
];

export default function BasicTable() {
    return (
        <div className='container p-20'>
            <TableContainer className=' background-dark' component={Paper}>
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell className='dark-color-white transition' align='center'>عملیات </TableCell>
                            <TableCell className='dark-color-white transition' align="center">شماره تماس</TableCell>
                            <TableCell className='dark-color-white transition' align="center">ایمیل</TableCell>
                            <TableCell className='dark-color-white transition' align="center">نام</TableCell>
                            <TableCell className='dark-color-white transition' align="left">ID</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {rows.map((row) => (
                            <TableRow 
                                key={row.img}
                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                            >
                                <TableCell align='center' component="th" scope="row">
                                    <Button variant="outlined" className='dark-color-white transition' startIcon={<MdDelete className='ml-5' />}>
                                        Delete
                                    </Button>
                                </TableCell>
                                <TableCell className='dark-color-white transition' align="center">{row.calories}</TableCell>
                                <TableCell className='dark-color-white transition' align="center">{row.fat}</TableCell>
                                <TableCell align="center" className='d-flex username'>
                                    <h2 className='dark-color-white transition'>{row.carbs}</h2>
                                    <img src={row.img} alt="" className='image-user'/>
                                </TableCell>
                                <TableCell className='dark-color-white transition' align="left">{row.protein}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </div>
    );
}