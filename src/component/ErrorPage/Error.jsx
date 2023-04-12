import React from 'react';
import { Link, useRouteError } from 'react-router-dom';
import Lottie from "lottie-react";
import errorLottie from '../../assets/All Images/error.json'

const Error = () => {
    const { error, status } = useRouteError()

    return (
        <div className='md:flex  flex-col items-center h-screen p-16 bg-gray-100 text-gray-900'>
            <div className='md:flex flex-col items-center justify-center px5 mx-auto my-8 '>
                <Lottie className='w-44 ' animationData={errorLottie} loop={true} />
                <div className='max-w-md text-center'>
                    <h2 className='mb-8 font-extrabold text-9xl text-gray-900'>
                        <span className='sr-only'>Error</span> {status || 404}
                    </h2>
                    <p className='text-red-600 text-xl font-bold'>আপনি খুবই চালাক ব্যক্তি উল্টাপালটা জায়গায় ক্লিক মারেন !!!</p>
                    <div>
                        <p className='text-2xl font-semibold md:text-3xl mb-8'>
                            {error?.message}</p>
                        <Link to={'/'} className='btn btn-t'>Back To Home</Link>

                    </div>
                </div>

            </div>
        </div>
    );
};

export default Error;