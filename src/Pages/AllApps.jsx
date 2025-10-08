import React, { useState } from 'react';
import UseApps from '../Hook/UseApps';
import AppsCart from './AppsCart';

const AllApps = () => {
    const {apps, loading} = UseApps()

    const [search, setSearch] = useState('')
    const term = search.trim().toLocaleLowerCase();
    const searchApp = term? apps.filter(app =>app.title.toLocaleLowerCase().includes(term)) : apps;

    if(loading) return <h1 className='bg-red-600'>Loading....</h1>

    return (
        <div>
            <section className='bg-gray-200'>
                <div className='w-11/12 mx-auto py-10'>
                <h1 className='text-center font-bold text-3xl p-5'>Trending Apps</h1>
                <p className='text-gray-500 text-center pb-10'>Explore All Trending Apps on the Market developed by us</p>
                <div className='flex justify-between'>
                    <div className='p-5 text-3xl font-semibold'><h1>({searchApp.length}) Apps found</h1></div>
                    <label className="input">
                    <svg className="h-[1em] opacity-50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                        <g
                        strokeLinejoin="round"
                        strokeLinecap="round"
                        strokeWidth="2.5"
                        fill="none"
                        stroke="currentColor"
                        >
                        <circle cx="11" cy="11" r="8"></circle>
                        <path d="m21 21-4.3-4.3"></path>
                        </g>
                    </svg>
                    <input value={search} onChange={(e) =>setSearch(e.target.value)} type="search" required placeholder="Search Apps" />
                </label>
                </div>
                    <div className='grid grid-cols-4 gap-4'>
                        {
                            searchApp.map(data=><AppsCart key={data.id} data={data}></AppsCart>)
                        }
                    </div>
                </div>
                {/* <Link to='allApps'className='btn font-semibold'>Show More</Link> */}
            </section>
        </div>
    );
};

export default AllApps;