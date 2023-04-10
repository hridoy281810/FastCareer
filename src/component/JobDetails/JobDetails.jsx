import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';

const JobDetails = () => {
  const jobs = useLoaderData()
  console.log(jobs)
  const {company,title,companyLogoUrl,description,educationalRequirements,email,experiences,id,jobSide,jobType,location,phone,responsibilities,salary} = jobs;

  console.log(jobs)
    return (
        <div className='my-container'>
          <div className='md:flex gap-12'>
      <div className=' col-span-8'>
    <p className='text-gray-500 mb-8'><span className='text-xl font-bold text-gray-700'>job Description:</span>{description}</p>

    <p className='text-gray-500 mb-8'><span className='text-xl font-bold text-gray-700'>Job Responsibility:</span> {responsibilities}</p>

    <p className=' mb-3 text-xl font-bold text-gray-700'>Educational Requirement: </p>
    <p className='mb-3 text-gray-500'>{educationalRequirements}</p>
      
    <p className='text-gray-500 mb-3'><span className='text-xl font-bold text-gray-700'>Experience:</span> <br /> </p>
    <p className='text-gray-500 '>{experiences}</p>
      
      </div>
      <div className='p-8 bg-blue-50 rounded col-span-4'>
<Link ><h2 className='text-xl font-bold text-gray-700'>Job Details</h2></Link>

      </div>
          </div>
        </div>
    );
};

export default JobDetails;