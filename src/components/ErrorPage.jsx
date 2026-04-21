import React from 'react';
import { NavLink } from 'react-router';

const ErrorPage = () => {
    return (
        <div className='flex flex-col justify-center items-center h-screen space-y-4'>
            <h3 className='text-5xl text-red-600'>404</h3>
            <h3 className='text-5xl text-red-600'>Page Not Found</h3>


            <NavLink to='/'>
                <h3 className='bg-green-700 text-white px-8 py-2 hover:bg-green-600'>Go Back</h3>
            </NavLink>
        </div>
    );
};

export default ErrorPage;