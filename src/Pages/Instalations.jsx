import React, { useEffect, useState } from 'react';
import { toast, ToastContainer } from 'react-toastify';


const Instalations = () => {
    const [sortOrder, setSortOrder] = useState('none')
    const [installed, setInstalled] = useState([]);
    useEffect(()=>{
        const saveList = JSON.parse(localStorage.getItem("installed"));
        if(saveList) setInstalled(saveList)
            
    }, [])

    const sortItem = () =>{
        if(sortOrder === "downloads-asc"){
            return [...installed].sort((a, b)=> a.downloads - b.downloads)
        }
        else if(setSortOrder === "downloads-desc"){
            return [...installed].sort((a, b)=> b.downloads - a.downloads) 
        }else{
                return installed
            }
        }
        
        const handleRemove = (id) =>{
            toast ("Uninstall Successfull!")
        const existingList = JSON.parse(localStorage.getItem('installed'))
        let updateList = existingList.filter(p=>p.id !== id)
            setInstalled(updateList);
        localStorage.setItem('installed', JSON.stringify(updateList))
    }
    

    return (
        <div className='max-w-7xl mx-auto p-10'>
            <div className='flex justify-between items-center'>
                <h1 className='text-3xl font-bold p-5'> Installed apps ({installed.length})</h1>

             <label className='form-control w-full max-w-xs'>
                    <select className='select select-bordered'
                        value={sortOrder} onChange ={e => setSortOrder(e.target.value)}>
                        <option value='none'>Sort by Download</option>
                        <option value='downloads-asc'>Low-&gt;High</option>
                        <option value='price-desc'>High-&gt;Low</option>
                    </select>
                </label>
            </div>
            <div className='space-y-8'>
                {
                sortItem().map((ins, id)=>
                <div key={id} className="card card-side bg-base-100 shadow-sm">
                            <figure>
                                <img className='w-[150px] p-5'
                                src={ins.image}
                                alt="photo" />
                            </figure>
                            <div className="card-body">
                                <h2 className="card-title">{ins.title}</h2>
                                <div className='flex gap-4'>
                                    <h1 className="font-bold text-l text-green-400"><i className="fa-solid fa-download"></i>{ins.downloads}M</h1>             
                                    <h1 className="font-bold text-l text-orange-400"><i className="fa-solid fa-star"></i>{ins.ratingAvg}</h1>              
                                    <h1 className="font-bold text-l text-gray-400">{ins.size}MB</h1>
                                                       
                                </div>
                                <div className="card-actions justify-end">
                                <button  onClick={()=>handleRemove(ins.id)} className="btn btn-primary">Unintall</button>
                                </div>
                            </div>
                        </div>
                )
            }
            </div>
            <ToastContainer
                    position="top-center"
                    autoClose={4000}
                    theme="dark"
                    />
        </div>
    );
};

export default Instalations;