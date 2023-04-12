import React from 'react';
import './Category.css'

const Category = ({ category }) => {
    const { name, img, post } = category

    return (
        <div className=' bg-blue-50 p-10 rounded'>
            <div className='category-item inline-flex justify-center items-center mb-6'>
                <img src={img} alt="" />
            </div>
            <h1 className='text-xl font-semibold mb-2'>{name}</h1>
            <p className='text-gray-400'>{post}</p>
        </div>
    );
};

export default Category;