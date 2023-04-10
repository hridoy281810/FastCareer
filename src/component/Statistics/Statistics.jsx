import React from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';


const Statistics = () => {
    const assignmentData =[
        {
            id: "1c45s",
            name: "new year new me",
            mark: 60
        },
        {
            id: "2a45s",
            name: "g3-architects ",
            mark: 60
        },
        {
            id: "3b46s",
            name: "legal solution",
            mark: 60
        },
        {
            id: "4d47s",
            name: "Basic Javascript Problem",
            mark: 46
        },
        {
            id: "5e48s",
            name: "Geometry Genius",
            mark: 52
        },
        {
            id: "6f49s",
            name: "AI Universe API and ES6",
            mark: 56
        },
        {
            id: "7g59s",
            name: "Make Quiz Hero",
            mark: 60
        },
        {
            id: "8h69s",
            name: "Knowledge cafe",
            mark: 60
        }
    ] 
    {
        
    }
    return (
        <>
        <div className='bg-gray-100 md:py-24'>
     <h2 className='text-center text-4xl font-bold '>Job Details</h2>
     </div>
     <div className='my-container'>
    <AreaChart
     width={1280}
     height={700}
     data={assignmentData}
    >
         <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Area type="monotone" dataKey="mark" stroke="blue" fill="#CCCCFF" />
    </AreaChart>
     </div>
        </>
    );
};

export default Statistics;