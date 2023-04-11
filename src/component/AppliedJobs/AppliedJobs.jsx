import React, { useContext } from 'react';
import { useLoaderData } from 'react-router-dom';
import SaveInfo from '../SaveInfo/SaveInfo';
import { CartContext } from '../Layout/Layout';

const AppliedJobs = () => {
    const [cart,setCart] = useContext(CartContext || [])
    const handleRemoteJobs = ()=>{
     const remote = cart.filter(rm => rm.jobSide === "Remote")
   setCart(remote)
    }
    const handleOnsiteJobs = ()=>{
     const onsite = cart.filter(rm => rm.jobSide === "Onsite")
   setCart(onsite)
    }

    return (
        <>
  <div className='bg-gray-100 md:py-24'>
 <h2 className='text-center text-4xl font-bold '>Applied Jobs </h2>
 </div>
  <div className='my-container'>
    <div className='flex justify-end'>
    <button onClick={()=> handleRemoteJobs()} className='btn btn-t'>Show Remote Jobs</button> 
    <button onClick={()=>handleOnsiteJobs()} className='btn btn-t'>Show Onsite Jobs</button>
    </div>
  <div className='grid md:grid-cols-1 gap-10 mt-10'>
   {
    cart.map(info => <SaveInfo key={info.id} info={info}></SaveInfo>)
   }
  </div>
  </div>
           
        </>
    );
};

export default AppliedJobs;