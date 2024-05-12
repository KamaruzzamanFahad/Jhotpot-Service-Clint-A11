import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const PopullerService = () => {
    const [service, setservice] = useState([])
    const [count, setcount] = useState(0)
    useEffect(() => {
        axios.get('http://localhost:5000/Servicessix', { withCredentials: true })
            .then(res => {
                setservice(res.data)
                setcount(1)
            })
    }, [])
    console.log(service)

    return (
        <div>
            <div>
                <h1 className='text-center mt-14 mb-2'>Popular Services</h1>
                <p className='px-[5%] md:px-[10%] xl:px-[20%] text-center mb-10'>Explore this section to discover the features and functionalities users love most. Find helpful resources and guides to streamline your experience, all in one convenient place.</p>
            </div>

            <div className='grid grid-cols-1 xl:grid-cols-2 gap-4 mt-10'>

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
                                <p className='w-[90%]'>{item.detils.substring(0, 90)}</p>
                                <Link to={`/services/${item._id}`}> <button className='bg-[#FF6C1A] w-72 text-black'>View Detail</button></Link>
                            </div>
                        </div>
                    ))
                }
            </div>
            <div className={count == 0 ? `hidden` : `flex justify-center items-center`}>
                <Link to={'/allservices'}>
                    <button className='bg-[#FF6C1A] w-72 m-5 font-semibold text-black'>Show All</button>
                </Link>
            </div>


        </div>

    );
};

export default PopullerService;