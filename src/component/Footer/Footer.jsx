import React from 'react';
import iconImg from '../../assets/Icons/Group 9969.png'
const Footer = () => {
    return (
        <div className='bg-black'>
            <footer className='my-container '>
         <section className='grid md:grid-cols-5 gap-10 mb-10 '>
        <div className='text-white'>
            <h2 className='text-2xl font-bold mb-4'>CareerHub</h2>
            <p className='text-gray-300 mb-3'>There are many variations of passages of Lorem Ipsum , but the majority have suffered alteration in some form.</p>
         
                <img src={iconImg} alt="" />
        </div>
        <div className=''>
     <h3 className='text-xl text-white font-bold mb-4'>Company</h3>
    <div className='text-gray-300'>
    <p className='mb-3'> About Us</p>
     <p className='mb-3'> Work</p>
     <p className='mb-3'>Latest News</p>
     <p className='mb-3'>Careers</p>
    </div>
        </div>
        <div className=''>
     <h3 className='text-xl text-white font-bold mb-4'>Product</h3>
    <div className='text-gray-300'>
    <p className='mb-3'>Prototype</p>
     <p className='mb-3'>Plans & Pricing</p>
     <p className='mb-3'>Customers</p>
     <p className='mb-3'>Integrations</p>
    </div>
        </div>
        <div className=''>
     <h3 className='text-xl text-white font-bold mb-4'>Support</h3>
    <div className='text-gray-300'>
    <p className='mb-3'> Help Desk</p>
     <p className='mb-3'>Sales</p>
     <p className='mb-3'>Become a Partner</p>
     <p className='mb-3'>Developers</p>
    </div>
        </div>
        <div className=''>
     <h3 className='text-xl text-white font-bold mb-4'>Contact</h3>
    <div className='text-gray-300'>
    <p className='mb-3'>   524 Broadway , NYC</p>
     <p className='mb-3'>+1 777 - 978 - 5570</p>
    </div>
        </div>
         </section>
         <div className='h-0.5 opacity-60 bg-gray-500'></div>
         <div className='md:flex justify-between items-center mt-8 text-gray-400'>
            <p>@2023 MyPortfolio. All Rights Reserved</p>
            <p>Powered by MyPortfolio</p>
         </div>
            </footer>
            
        </div>
    );
};

export default Footer;