import React from 'react';

const Blog = () => {
  return (
    <>
      <div className='bg-gray-100 md:py-24'>
        <h2 className='text-center text-4xl font-bold '>Questions and answers page </h2>
      </div>
      <div className='my-container'>
        <div className='md:grid grid-cols-2 gap-8'>
          <div className='bg-gray-100 p-6 rounded shadow-md mb-8'>
            <p className='text-2xl text-blue-700 font-bold font-sans mb-2 '>Question: When to use the Contact API?</p>
            <p className='text-xl text-gray-500'> <span className='font-bold'>Answer:</span> When we create a project, there is a function that needs to be called in multiple places. We need to use the same function in multiple places, but it turns out that we can't use the inner function above in React, so to avoid this problem, Context API has come. We can call a function anywhere and use it anywhere through Context API. </p>
          </div>

          <div className='bg-gray-100 p-6 rounded shadow-md mb-8'>
            <p className='text-2xl text-blue-700 font-bold font-sans mb-2 '>Question: What is custom hook?</p>
            <p className='text-xl text-gray-500'> <span className='font-bold'>Answer:</span> There are many types of hooks in the React project, one of them is custom, which I will create by myself, and another function will export the function, then I will send it anywhere. I will import from anywhere. can use it. </p>
          </div>
          <div className='bg-gray-100 p-6 rounded shadow-md mb-8'>
            <p className='text-2xl text-blue-700 font-bold font-sans mb-2 '>Question: What is UseRef?</p>
            <p className='text-xl text-gray-500'> <span className='font-bold'>Answer:</span> UseRef is a process of React, This allows us to take a reference to the element and perform some operations based on it. This is typically used inside the Class component. </p>
          </div>
          <div className='bg-gray-100 p-6 rounded shadow-md mb-8'>
            <p className='text-2xl text-blue-700 font-bold font-sans mb-2 '>Question: What is UseMemo?</p>
            <p className='text-xl text-gray-500'> <span className='font-bold'>Answer:</span>
              Use memo is React's hook by which we can perform some computation based on a component's input and memorize it so we can cache it without returning to the compose station from the time the component is rendered. This reduces performance overhead and This is a very useful process in project creation by speeding up the rendering time of components </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Blog;