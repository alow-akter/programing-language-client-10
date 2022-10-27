import React from 'react';

const Error = () => {
    return (
        <div className='text-center mt-28 bg-[#A9B7AF] p-20'>
            <h4 className='text-red-600 text-5xl bold'>OOPS!!!</h4>
            <h3 className='text-red-500'>404</h3>
            <h5 className='text-red-700 text-2xl'>This page does not exist</h5>
            <p className='text-2xl'>The page you are looking for could not be found</p>
        </div>
    );
};

export default Error;