import React from 'react';

const AppsCart = ({data}) => {
    const {image, title, companyName, downloads, ratingAvg} = data;
    return (
        <div>
            <div className="card bg-base-100 w-96 shadow-sm">
            <figure>
                <img src={image} alt="Shoes" />
            </figure>
            <div className="card-body">
                <h2 className="card-title">
                {title}
                </h2>
                <p>{companyName}</p>
                <div className="card-actions justify-between">
                <div className="badge badge-outline">Fashion</div>
                <div className="badge badge-outline">Products</div>
                </div>
            </div>
            </div>
        </div>
    );
};

export default AppsCart;