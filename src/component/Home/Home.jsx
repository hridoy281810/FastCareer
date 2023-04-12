import React, { useContext, useState } from 'react';
import './Home.css'
import img from '../../assets/All Images/P3OLGJ1 copy 1.png'
import { useNavigation } from 'react-router-dom';
import Category from '../Category/Category';
import JobFeature from '../JobFeature/JobFeature';
import { ProductContext } from '../Layout/Layout';
import LoadingSpinner from '../LoadingSpinner/LoadingSpinner';
const Home = () => {
    const navigation = useNavigation();
    if (navigation.state === 'loading') {
        return <LoadingSpinner />
    }
    const products = useContext(ProductContext || [])

    const [visible, setVisible] = useState(4)
    function handleSeeAllJobs() {
        setVisible((previousData => previousData + 2));
        console.log(previousData)
    }

    return (
        <>
            <div className='bg-gray-100'>
                <div className='my-container padding'>
                    <div className='md:flex justify-between items-center gap-10'>
                        <div>
                            <h1 className='text-6xl font-bold leading-tight mb-4'>One Step <br />  Closer To Your  <span className='dream'>Dream Job</span></h1>
                            <p className='mb-4 text-gray-500'>Explore thousands of job opportunities with all the information you need. Its your future. Come find it. Manage all your job application from start to finish.</p>
                            <button className='btn btn-t'>Get Started</button>
                        </div>
                        <img src={img} alt="banner-img" />
                    </div>
                </div>
            </div >
            <div className='category my-container'>
                <h2 className='text-center text-4xl font-bold '>Job Category List</h2>
                <p className='text-center mt-4 text-gray-500'>Explore thousands of job opportunities with all the information you need. Its your future</p>
                <div className='grid md:grid-cols-4 gap-10 mt-10'>
                    {
                        products.slice(0, 4).map(category => <Category key={category.id}
                            category={category}
                        >
                        </Category>)
                    }
                </div>
            </div>
            <div className=' my-container'>
                <h2 className='text-center text-4xl font-bold '>Featured Jobs</h2>
                <p className='text-center mt-4 text-gray-500'>Explore thousands of job opportunities with all the information you need. Its your future</p>
                <div className='grid md:grid-cols-2 gap-10 mt-10'>
                    {
                        products.slice(0, visible).map(feature => <JobFeature key={feature.id} feature={feature}></JobFeature>)
                    }
                </div>
                <div className=' flex justify-center items-center mt-8'>
                    <button onClick={handleSeeAllJobs} className={`btn btn-t ${visible === 4 ? 'visible  ' : 'hidden'}`}> See All Jobs </button>
                </div>
            </div>
        </>
    );
};

export default Home;