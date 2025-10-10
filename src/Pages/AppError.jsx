import React from 'react';
import Apperror from '/App-Error.png'
import { Link } from 'react-router';

const AppError = () => {
    return (
            <div className='flex flex-col items-center py-4'>
            <img src={Apperror} alt="" />
            <h1 className='text-3xl font-bold py-5'>OPPS!! APP NOT FOUND</h1>
            <p className='text-gray-500 px-5'>The App you are requesting is not found on  your system. Please try another Apps</p>
            <Link to='/allapps' className='btn bg-gradient-to-br from-[#632EE3] to-[#9F62F2] text-white my-5'>Go Back!</Link>
            </div>
            
    );
};

export default AppError;