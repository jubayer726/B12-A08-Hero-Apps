import React from 'react';
import Banner from '../Components/Banner';
import State from '../Components/State';
import AppsCart from './AppsCart';
import { Link, useLoaderData } from "react-router";

const Home = () => {
    
  const fetchData = useLoaderData();
  
  const featureApp = fetchData.slice(0, 8)

    return (
        <div>
            <Banner></Banner>
            <State></State>
            <section className='bg-gray-200'>
                <div className='w-11/12 mx-auto py-10'>
                <h1 className='text-center font-bold text-3xl p-5'>Trending Apps</h1>
                <p className='text-gray-500 text-center pb-10'>Explore All Trending Apps on the Market developed by us</p>
                    <div className='grid grid-cols-4 gap-4'>
                        {
                            featureApp.map(data=><AppsCart key={data.id} data={data}></AppsCart>)
                        }
                    </div>
                    <div className='flex justify-center p-5'>
                        <Link className='btn bg-gradient-to-br from-[#632EE3] to-[#9F62F2] text-white' to='/allApps'>Show More</Link>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Home;