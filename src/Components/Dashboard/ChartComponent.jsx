import React from 'react'
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import '../../assets/css/Chart/Chart.css'
export default function ChartComponent() {
    const data = [
        { name: 'فروردین', uv: 4000, pv: 2400, amt: 2400 },
        { name: 'اردیبهشت', uv: 3000, pv: 1398, amt: 2210 },
        { name: 'خرداد', uv: 2000, pv: 9800, amt: 2290 },
        { name: 'تیر', uv: 2780, pv: 3908, amt: 2000 },
        { name: 'مرداد', uv: 1890, pv: 4800, amt: 2181 },
        { name: 'شهریور', uv: 2390, pv: 3800, amt: 2500 },
        { name: 'مهر', uv: 3490, pv: 4300, amt: 2100 },
    ];



    return (
        <div className='chart-section background-dark dark-color-white'>
          
                <LineChart width={1100}  height={300} data={data}>
                    <XAxis dataKey="name" />
                    <YAxis />
                    <CartesianGrid strokeDasharray="3 3" />
                    <Tooltip />
                    <Legend />
                    <Line type="monotone" dataKey="pv" stroke="#8884d8" activeDot={{ r: 8 }} />
                </LineChart>
     
        </div>
          
        




    )
}




