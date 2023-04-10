import React from 'react';

const JobDetails = () => {
    return (
        <div className='my-container'>
          <div className='md:flex gap-12'>
      <div className=' col-span-8'>
    <p className='text-gray-500 mb-8'><span className='text-xl font-bold text-gray-700'>job Description:</span> Lorem, ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit tenetur architecto aliquid laudantium eligendi .</p>
    <p className='text-gray-500 mb-8'><span className='text-xl font-bold text-gray-700'>Job Responsibility:</span> Lorem, ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit tenetur architecto aliquid laudantium eligendi .</p>

    <p className='text-gray-500 mb-8'><span className='text-xl font-bold text-gray-700'>Educational Requirement: <br /> </span> Lorem, ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit tenetur architecto aliquid laudantium eligendi .</p>
      </div>
      <div className='p-8 bg-blue-50 rounded col-span-4'>
<h2 className='text-xl font-bold text-gray-700'>Job Details</h2>

      </div>
          </div>
        </div>
    );
};

export default JobDetails;