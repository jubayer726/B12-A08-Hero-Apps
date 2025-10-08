import React from 'react';
import UseApps from '../Hook/UseApps';

const AppDetails = () => {
    const {apps, loading} = UseApps()
    
    if(loading) return <h1 className='bg-red-600'>Loading....</h1>

    const {image, title, companyName, description, ratingAvg, downloads} = apps || {};
    console.log(apps);


    return (
        <div className='w-8/12 mx-auto'>
            <h1>This is app details section</h1>
            <div className="card bg-base-100 shadow-sm pt-5">
            <figure>
                <img src={image} alt="Photo" />
            </figure>
            <div className="card-body">
                <h2 className="card-title">
                {title}
                </h2>
                <p>{companyName}</p>
                <p>{description}</p>
                <div className="card-actions justify-between">
                <div className="badge badge-outline text-green-500 font-semibold"><i className="fa-solid fa-download"></i>{downloads}M</div>
                <div className="badge badge-outline text-orange-400 font-semibold"><i className="fa-solid fa-star"></i>{ratingAvg}</div>
                </div>
            </div>
            </div>
        </div>
    );
};

export default AppDetails;