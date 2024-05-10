import axios from 'axios';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const AllServices = () => {
    const [service, setservice] = useState([])
    const [count, setcount] = useState(0)
    axios.get('http://localhost:5000/services', { withCredentials: true })
        .then(res => {
            setservice(res.data)
            setcount(1)
        })
    console.log(service)


    return (
        <div>
            <div className='grid grid-cols-1 gap-4 mt-10 mb-6'>

                <div className={count == 1 ? `hidden` : `flex justify-end items-cente w-full `}>
                    <span className="loading loading-spinner text-red-500 loading-lg"></span>
                </div>
                {
                    service.map((item, i) => (
                        <div className='flex flex-col sm:flex-row p-5 border-2 rounded-xl gap-5 border-[#ff515137]'>
                            <div>
                                <img src={item.image} alt="" className='w-full sm:w-96 md:w-80 h-full rounded-xl' />
                            </div>
                            <div className='flex flex-col gap-2'>
                                <div className='flex justify-start items-center gap-3'>
                                    <img src={item.userimage} alt="" className='w-10 rounded-full' />
                                    <div>
                                        <p className='text-xl font-semibold'>{item.username}</p>
                                    </div>
                                </div>
                                <h1 className='text-3xl'>{item.name}</h1>
                                <p>{item.price}</p>
                                <p>{item.area}</p>
                                <p className='w-[90%]'>{item.detils.substring(0, 90)}</p>
                                <button className='bg-[#FF6C1A] w-72'>View Detail</button>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>

    );
};

export default AllServices;