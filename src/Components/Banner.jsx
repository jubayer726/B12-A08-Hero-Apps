import React from 'react';
import google from '/google.png';
import Aoogle from '/Apple.png';
import hero from '/hero.png';

const Banner = () => {
    return (
        <div className='bg-gray-100'>
            <div className='w-10/12 lg:w-6/12 mx-auto pt-10'>
                <h1 className='text-center text-5xl font-bold py-5'>We Build <br /> <span className='bg-gradient-to-br from-[#632EE3] to-[#9F62F2] bg-clip-text text-transparent'>Productive</span> Apps</h1>

                <p className='text-center text-gray-500'>At HERO.IO, we craft innovative apps designed to make everyday life simpler, smarter, and more exciting. Our goal is to turn your ideas into digital experiences that truly make an impact.</p>

                <div className='flex justify-center gap-4 py-10'>
                    <a href="https://play.google.com/store/games?hl=en" className='flex items-center btn'>
                        <img className='w-8 p-1' src={google} alt="" />
                        <h2 className='font-semibold'>Google Play</h2>
                    </a>

                    <a href='https://www.apple.com/app-store/' className='flex items-center btn'>
                        <img className='w-8 p-1' src={Aoogle} alt="" />
                        <h2 className='font-semibold'>App Store</h2>
                    </a>
            </div>
            <div>
                <img src={hero} alt="" />
            </div>
            </div>
            
        </div>
    );
};

export default Banner;