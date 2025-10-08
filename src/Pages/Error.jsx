import React from 'react';
import error from '/error-404.png'
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';

const Error = () => {
    return (
        <div className='flex flex-col min-h-screen'>
            <Navbar></Navbar>

            <div className='w-6/12 border mx-auto flex-1 py-12'>
            <img className='flex items-center' src={error} alt="" />
            </div>

            <Footer></Footer>
        </div>
    );
};

export default Error;