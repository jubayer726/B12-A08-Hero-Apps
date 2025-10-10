import React, { useState } from 'react';
import UseApps from '../Hook/UseApps';
import AppsCart from './AppsCart';
import { Link } from 'react-router';
import logo from '/logo.png'

const AllApps = () => {
    const {apps, loading} = UseApps()

    const [search, setSearch] = useState('')
    const term = search.trim().toLocaleLowerCase();
    const searchApp = term? apps.filter(app =>app.title.toLocaleLowerCase().includes(term)) : apps;
    
   
    if(loading) return (<div className="flex items-center justify-center h-screen bg-white">
          <img
            src={logo} alt="Loading..."
            className="w-40 h-40 animate-spin-slow"/>
        </div>
        )
         if (searchApp.length == 0){
        return (<div className='flex flex-col items-center p-10'><h2 className='text-center text-3xl font-bold text-gray-500'>No App Found</h2>
                <Link to='/' className='btn bg-gradient-to-br from-[#632EE3] to-[#9F62F2] text-white my-5 w-[200px]'>Go Back!</Link>
        </div>)
    }

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
                    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4'>
                        {
                            searchApp.map(data=><AppsCart key={data.id} data={data}></AppsCart>)
                        }
                    </div>
                </div>
            </section>
        </div>
    );
};

export default AllApps;