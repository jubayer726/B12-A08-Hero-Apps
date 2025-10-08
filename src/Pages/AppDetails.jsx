import React from 'react';
import UseApps from '../Hook/UseApps';
import { useParams } from 'react-router';
import download from '/icon-downloads.png'
import ratings from '/icon-ratings.png'
import review from '/icon-review.png'

const AppDetails = () => {
    const {apps, loading} = UseApps()
    
    const {id} = useParams();
    const app = apps.find(p => String(p.id) === id)
    if(loading) return <h1 className='bg-red-600'>Loading....</h1>

    const {image, title, description, ratingAvg, downloads, reviews} = app;
    
    

    return (
        <div className='w-8/12 mx-auto'>
            <div className="flex justify-between items-center gap-4 pt-10">
                <div className='p-5'>
                    <img className='rounded-2xl' src={image} alt="Photo" />
                </div>
                <div className="card-body">
                    <h2 className="card-title">{title}</h2>
                    <p className='text-gray-400'>Developed by: <span className='text-fuchsia-700 font-semibold'>Hero.IO</span></p>
                    <hr className="border-t border-gray-300 my-4" />
                    <div className='flex justify-around gap-4'>
                        <div>
                           <img src={download} alt="photo" />
                           <p className='text-gray-500 py-2'>Download</p>
                           <h1 className="font-bold text-3xl">{downloads}M</h1>
                        </div>
                        <div>
                           <img src={ratings} alt="photo" />
                           <p className='text-gray-500 py-2'>Average Ratings</p>
                           <h1 className=" font-bold text-3xl">{ratingAvg}</h1>
                        </div>
                        <div>
                           <img src={review} alt="photo" />
                           <p className='text-gray-500 py-2'>Total Reviews</p>
                           <h1 className="font-bold text-3xl">{reviews}K</h1>
                        </div>
                    </div>
                    <button className='bg-green-600 w-[200px] btn p-5 mt-5 text-white font-semibold'>Install Now (190 MB) </button>
                </div>
            </div>
            <hr className="border-t border-gray-300 my-4" />
            <div className='p-5'>
                <h1 className='p-5 text-2xl font-semibold'>Description</h1>
                <p className='text-gray-500'>{description}</p>
            </div>
        </div>
    );
};

export default AppDetails;