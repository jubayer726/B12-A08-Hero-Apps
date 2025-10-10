import React, { useState } from 'react';
import UseApps from '../Hook/UseApps';
import { useParams } from 'react-router';
import download from '/icon-downloads.png'
import Ratings from '/icon-ratings.png'
import review from '/icon-review.png'
import { BarChart, Bar, Rectangle, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { ToastContainer, toast } from 'react-toastify';
import logo from '/logo.png'

const AppDetails = () => {
    const {id} = useParams();
    const {apps, loading} = UseApps()
    const [disabled, setDisabled] = useState(false);
    const app = apps.find(p => String(p.id) === id)
    if(loading) return (<div className="flex items-center justify-center h-screen bg-white">
          <img
            src={logo} alt="Loading..."
            className="w-40 h-40 animate-spin-slow"
          />
        </div> )

    const {image, title, description, ratingAvg, downloads, reviews, size, ratings} = app;

    const handleInstall =() =>{
        toast("The App installing..")
        setDisabled(true)
        const existingList = JSON.parse(localStorage.getItem('installed'))
        let updateList = [];
        if(existingList){
            const isDuplicate = existingList.some(ins=>ins.id === app.id)
            if(isDuplicate) return;
                updateList = [...existingList, app];
        }
        
        else{
            updateList.push(app)
        }
        localStorage.setItem('installed', JSON.stringify(updateList))
        
    }
    
    
    return (
        <div className='w-8/12 mx-auto'>
            <div className="lg:flex justify-between items-center gap-4 pt-10">
                <div>
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
                           <h1 className="font-bold lg:text-3xl">{downloads}M</h1>
                        </div>
                        <div>
                           <img src={Ratings} alt="photo" />
                           <p className='text-gray-500 py-2'>Average Ratings</p>
                           <h1 className=" font-bold lg:text-3xl">{ratingAvg}</h1>
                        </div>
                        <div>
                           <img src={review} alt="photo" />
                           <p className='text-gray-500 py-2'>Total Reviews</p>
                           <h1 className="font-bold lg:text-3xl">{reviews}K</h1>
                        </div>
                    </div>
                    <button onClick={handleInstall} disabled={disabled} className='bg-green-600 w-[200px] btn p-5 mt-5 text-white font-semibold'>Install Now {size}MB </button>
                </div>
            </div>
            <hr className="border-t border-gray-300 my-4" />

            <div className='space-y-5 my-5'>
                <h2 className='text-3xl font-bold'>Ratings</h2>
                <div className='bg-base-100 rounded-2xl p-4 h-80'>
                    <ResponsiveContainer width="100%" height="100%">
                        <BarChart
                        
                            data={ratings}
                            margin={{ top: 5, right: 30, left: 50, bottom: 5 }}
                        >
                            <CartesianGrid strokeDasharray="3 3" />
                            <XAxis dataKey="ratings" />
                            <YAxis />
                            <Tooltip />
                            <Legend />
                             <Bar dataKey="count" fill="#FF8C00" barSize={25} radius={[4, 4, 4, 4]} />
                        </BarChart>
                        </ResponsiveContainer>

                </div>
            </div>

            <hr className="border-t border-gray-300 my-4" />
            <div className='p-5'>
                <h1 className='p-5 text-2xl font-semibold'>Description</h1>
                <p className='text-gray-500'>{description}</p>
            </div>

            <ToastContainer
                position="top-center"
                autoClose={4000}
                theme="dark"
                />
        </div>
    );
};

export default AppDetails;