import React, { useContext } from 'react';
import { useLoaderData, useNavigation } from 'react-router-dom';
import { CurrencyDollarIcon, CalendarDaysIcon, PhoneIcon, EnvelopeIcon, MapPinIcon } from '@heroicons/react/24/solid'
import { addToDb } from '../../Utilitis/fakedb';
import { CartContext } from '../Layout/Layout';
import { ToastContainer, toast } from 'react-toastify';
import LoadingSpinner from '../LoadingSpinner/LoadingSpinner';

const JobDetails = () => {
  const navigation = useNavigation();
  if (navigation.state === 'loading') {
    return <LoadingSpinner />
  }
  const jobs = useLoaderData()
  const [cart, setCart] = useContext(CartContext || [])


  const { title, description, educationalRequirements, email, experiences, location, phone, responsibilities, salary } = jobs;

  const handleApply = (jobs) => {
    let newCart = [];
    const exists = cart.find(pd => pd.id === jobs.id)
    if (!exists) {
      newCart = [...cart, jobs]
    }
    else {
      const remaining = cart.filter(pd => pd.id !== jobs.id);
      newCart = [...remaining, exists];
    }
    setCart(newCart)
    addToDb(jobs.id)
    return toast.success('Success Apply 👍', {
      position: toast.POSITION.TOP_CENTER
    });
  }

  return (
    <>

      <div className='bg-gray-100 md:py-24'>
        <h2 className='text-center text-4xl font-bold '>Job Details</h2>
      </div>
      <div className='my-container'>
        <div className='md:grid grid-cols-3  gap-12'>
          <div className=' col-span-2 '>
            <p className='text-gray-500 mb-8'><span className='text-xl font-bold text-gray-700'>job Description:</span>{description}</p>

            <p className='text-gray-500 mb-8'><span className='text-xl font-bold text-gray-700'>Job Responsibility:</span> {responsibilities}</p>

            <p className=' mb-3 text-xl font-bold text-gray-700'>Educational Requirement: </p>
            <p className='mb-3 text-gray-500'>{educationalRequirements}</p>

            <p className=' mb-3 text-xl font-bold text-gray-700'>Experience: </p>
            <p className='text-gray-500 mb-8'>{experiences}</p>
          </div>
          <div className=''>
            <div className='p-6 bg-blue-50 rounded ms-3 mb-4'>
              <h2 className='text-xl font-bold text-gray-700 mb-6'>Job Details</h2>
              <div className='h-0.5  bg-gray-400 opacity-10 mb-6'></div>

              <div className='inline-flex items-center gap-2 mb-4'>
                <CurrencyDollarIcon className="h-6 w-6 text-gray-500 " /> <p><span className='text-gray-600 font-bold '>Salary:</span> {salary} (Per Month)</p>
              </div>

              <div className='inline-flex items-center gap-2 mb-4'>
                <CalendarDaysIcon className="h-6 w-6 text-gray-500" /> <p><span className='text-gray-600 font-bold '>Job Title:</span> {title}</p>
              </div>

              <h2 className='text-xl font-bold text-gray-700 mb-6'>Contact Information</h2>
              <div className='h-0.5  bg-gray-400 opacity-10 mb-6'></div>

              <div className='inline-flex items-center gap-2 mb-4'>
                <PhoneIcon className="h-6 w-6 text-gray-500" /> <p><span className='text-gray-600 font-bold '>Phone:</span> {phone}</p>
              </div>

              <div className='inline-flex items-center gap-2 mb-4'>
                <EnvelopeIcon className="h-6 w-6 text-gray-500" /> <p><span className='text-gray-600 font-bold '>Email:</span> {email}</p>
              </div>
              <div className='inline-flex items-center gap-2 mb-4'>
                <MapPinIcon className="h-6 w-6 text-gray-500" /> <p><span className='text-gray-600 font-bold '>Location:</span> {location}</p>
              </div>
            </div>
            <button onClick={() => handleApply(jobs)} className='btn btn-t w-full'>Apply Now</button>
          </div>
        </div>
      </div>
      <ToastContainer />
    </>

  );
};

export default JobDetails;