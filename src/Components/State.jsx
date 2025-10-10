import React from 'react';

const State = () => {
    return (
        <div className='bg-gradient-to-br from-[#632EE3] to-[#9F62F2]'>
            <div className='w-10/12 lg:w-8/12 mx-auto py-10'>
                <h1 className=' text-2xl lg:text-4xl font-bold text-center p-5 text-white'>Trusted by Millions, Built for You</h1>
                <div className='flex justify-between items-center gap-4 py-5'>
                    <div className='p-4 lg:p-8 bg-gradient-to-br from-[#6329ec] to-[#8b47ea] rounded-2xl flex flex-col items-center'>
                        <p className='text-sm text-gray-200'>Total Downloads</p>
                        <h1 className='text-white font-black text-2xl lg:text-4xl py-4'>29.6M</h1>
                        <p className='text-sm text-gray-200'>21% more than last month</p>
                    </div>
                    <div className='p-4 lg:p-8 bg-gradient-to-br from-[#6329ec] to-[#8b47ea] rounded-2xl flex flex-col items-center'>
                        <p className='text-sm text-gray-200'>Total Reviews</p>
                        <h1 className='text-white font-black text-2xl lg:text-4xl py-4'>906K</h1>
                        <p className='text-sm text-gray-200'>46% more than last month</p>
                    </div>
                    <div className='p-4 lg:p-8 bg-gradient-to-br from-[#6329ec] to-[#9855f5] rounded-2xl flex flex-col items-center'>
                        <p className='text-sm text-gray-200'>Active Apps</p>
                        <h1 className='text-white font-black text-2xl lg:text-4xl py-4'>132+</h1>
                        <p className='text-sm text-gray-200'>31 more will Launch</p>
                </div>
                </div>
            </div>
        </div>
    );
};

export default State;