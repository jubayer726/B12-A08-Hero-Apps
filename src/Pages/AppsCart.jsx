import React from 'react';
import { Link } from 'react-router';

const AppsCart = ({data}) => {
    const {image, title, companyName, downloads, ratingAvg, id} = data;
    return (
        <Link to={`/appdetails/${id}`}>
            <div className="card bg-base-100 shadow-sm pt-5">
            <figure>
                <img className='rounded-2xl' src={image} alt="Shoes" />
            </figure>
            <div className="card-body">
                <h2 className="card-title">
                {title}
                </h2>
                <p>{companyName}</p>
                <div className="card-actions justify-between">
                <div className="badge badge-outline text-green-500 font-semibold"><i className="fa-solid fa-download"></i>{downloads}M</div>
                <div className="badge badge-outline text-orange-400 font-semibold"><i className="fa-solid fa-star"></i>{ratingAvg}</div>
                </div>
            </div>
            </div>
        </Link>
    );
};

export default AppsCart;