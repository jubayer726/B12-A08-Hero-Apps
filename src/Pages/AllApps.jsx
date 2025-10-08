import React from 'react';
import UseApps from '../Hook/UseApps';
import AppsCart from './AppsCart';

const AllApps = () => {
    const {apps, loading} = UseApps()
    if(loading) return <h1 className='bg-red-600'>Loading....</h1>

    return (
        <div>
            <section className='bg-gray-200'>
                <div className='w-11/12 mx-auto py-10'>
                <h1 className='text-center font-bold text-3xl p-5'>Trending Apps</h1>
                <p className='text-gray-500 text-center pb-10'>Explore All Trending Apps on the Market developed by us</p>
                    <div className='grid grid-cols-4 gap-4'>
                        {
                            apps.map(data=><AppsCart key={data.id} data={data}></AppsCart>)
                        }
                    </div>
                </div>
                {/* <Link to='allApps'className='btn font-semibold'>Show More</Link> */}
            </section>
        </div>
    );
};

export default AllApps;