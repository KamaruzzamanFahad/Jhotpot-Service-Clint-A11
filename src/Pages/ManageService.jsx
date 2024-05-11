import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../Provider/AuthProvider';
import Swal from 'sweetalert2';
import { Helmet } from 'react-helmet-async';

const ManageService = () => {
    const [service, setservice] = useState([])
    const [count, setcount] = useState(0)
    const { user } = useContext(AuthContext);
    const [dependency, setdependency] = useState([0, 2])

    useEffect(() => {
        axios.get(`http://localhost:5000/myservice?email=${user.email}`, { withCredentials: true })
            .then(res => {
                setservice(res.data)
                setcount(1)
            })
    }, [dependency])
    const navigate = useNavigate();

    const updatehandle = (item) => {
        navigate('/updateservice', { state: item })
    }

    const handledelete = (id) => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                axios.delete(`http://localhost:5000/delete/${id}`, { withCredentials: true })
                    .then(res => {
                        console.log(res.data)
                        if (res.data.deletedCount > 0) {
                            setdependency([8, 3, 4])
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your file has been deleted.",
                                icon: "success"
                            });
                        }
                    })
            }
        });
    }

    return (
        <div className='min-h-[50vh]'>
            <Helmet><title>Manage Services</title></Helmet>
            <div className='flex flex-col justify-center items-center'>
                <h1 className='text-center mb-5'>Manage Your Services</h1>
                {
                    count == 1 && service.length == 0 ? <h1 className='text-center text-2xl'>you haven't  any service for Manage</h1> : ''
                }
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
                                <div className='flex gap-3'>
                                    <button onClick={() => updatehandle(item)} className='bg-[#FF6C1A] w-full text-black'>Edit</button>
                                    <button onClick={() => handledelete(item._id)} className='bg-red-500 w-full text-black'>Delete</button>
                                </div>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>

    );
};

export default ManageService;