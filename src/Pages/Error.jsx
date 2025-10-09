import React from 'react';
import error from '/error-404.png'
import { Link } from 'react-router';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';


const Error = () => {
    return (
        <div>
            <Navbar></Navbar>
            <div className='flex flex-col items-center py-4'>
            <img src={error} alt="" />
            <h1 className='text-3xl font-bold py-5'>Oops, page not found!</h1>
            <p className='text-gray-500'>The page you are looking or is not available</p>
            <Link to='/allapps' className='btn bg-gradient-to-br from-[#632EE3] to-[#9F62F2] text-white my-5'>Go Back!</Link>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Error;