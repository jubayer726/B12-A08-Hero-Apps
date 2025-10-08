import React from 'react';
import Banner from '../Components/Banner';
import State from '../Components/State';
import AppsCart from './AppsCart';
import { useLoaderData } from "react-router";

const Home = () => {
    
  const fetchData = useLoaderData();
  console.log(fetchData);

    return (
        <div>
            <Banner></Banner>
            <State></State>
            <section className='bg-gray-200'>
                <div className='w-11/12 mx-auto py-10'>
                <h1 className='text-center font-bold text-3xl'>Trending Apps</h1>
                <p className='text-gray-400 text-center'>Explore All Trending Apps on the Market developed by us</p>
                    <div className='grid grid-cols-4 gap-4'>
                        {
                            fetchData.map(data=><AppsCart data={data}></AppsCart>)
                        }
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Home;