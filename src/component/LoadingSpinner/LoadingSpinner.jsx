import React from 'react';
import loading from '../../assets/All Images/loading.json'
import Lottie from "lottie-react";
const LoadingSpinner = () => {
    return (
        <div className='flex justify-center items-center h-[calc(100vh-99px)] ' >
            <div>
                <h1 className='text-4xl font-semibold text-blue-500'>LOADING......</h1>
            <Lottie className='w-44 ' animationData={loading} loop={true} />
            </div>
        </div>
    );
};

export default LoadingSpinner;