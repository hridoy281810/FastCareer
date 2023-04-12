import React from 'react';
import './JobFeature.css'
import { Link } from 'react-router-dom';
import { CurrencyDollarIcon ,MapPinIcon} from '@heroicons/react/24/solid'


const JobFeature = ({feature}) => {
const {company,title,companyLogoUrl,description,educationalRequirements,email,experiences,id,jobSide,jobType,location,phone,responsibilities,salary} = feature;

    return (
   
         <div className='mt-10'>
            <div className='p-10 rounded shadow-md border border-gray-200'>
           <img className='logo-img mb-8' src={companyLogoUrl} alt="companyLogoUrl" />
           <h2 className='text-2xl font-bold' >{title}</h2>
           <h3 className='text-xl text-gray-500 mb-4'>{company}</h3>
          <div className='inline-flex justify-start gap-5 items-center mb-5'>
          <button className='btn-outlined'>{jobSide}</button>
            <button className='btn-outlined'>{jobType}</button>
          </div>
            <div className='mb-5 '>
            <div className='inline-flex gap-2 me-4'><MapPinIcon className="h-6 w-6 text-gray-500"/>
            <span className='text-xl text-gray-500 '>{location}</span></div> 
          <div className='inline-flex gap-2'>
          <CurrencyDollarIcon  className="h-6 w-6 text-gray-500 "/>  <span className='text-xl text-gray-500'>Salary: {salary}</span>
   
            </div>  </div>
    <Link   to={`jobdetails/${id} `}>  <button  className='font-medium md:mb-0  px-3 py-1.5 md:px-6 md:py-2 m-2 text-lg  text-white btn'>View Details</button></Link>
            </div>
            
        </div>
  
    );
};

export default JobFeature;