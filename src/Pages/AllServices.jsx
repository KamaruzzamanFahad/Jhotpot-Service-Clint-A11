import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';

const AllServices = () => {

    const [service, setservice] = useState([])
    const [count, setcount] = useState(0)
    useEffect(() => {
        axios.get('https://server-electronic-item-repairing-services.vercel.app/Services', { withCredentials: true })
            .then(res => {
                setservice(res.data)
                setcount(1)
            })
    }, [])

    const [theme, settheme] = useState(localStorage.getItem('theme') ? localStorage.getItem('theme') : "light")
    window.addEventListener('click', function (event) {
        if (event.target.classList[0] == "toggle") {
            const theme = localStorage.getItem('theme')
            settheme(theme)
        }
    });
    const cardthemesty = {
        color: (theme == "light") ? 'black' : 'rgb(240, 240, 240)',
        'background-color': (theme == "light") ? '#eeeeee' : '#ffffff22',
    };

    const inputstylthem = {
        color: (theme == "light") ? 'black' : 'rgb(240, 240, 240)',
        'background-color': (theme == "light") ? 'white' : '#ffffff22',
    };
    const [text, settext] = useState([])

    const handlesearch = (e) => {
        settext(e.target.value)

    }

    useEffect(() => {
        axios.get(`https://server-electronic-item-repairing-services.vercel.app/Servicessearch?text=${text}`, { withCredentials: true })
            .then(res => {
                setservice(res.data)
                setcount(1)
            })
    }, [text])


    return (
        <div>
            <Helmet>
                <title>All Services</title>
            </Helmet>
            <div data-aos="fade-up"
                data-aos-duration="800" className='flex flex-col justify-center items-center'>
                <form data-aos="fade-up"
                    data-aos-duration="800" style={inputstylthem} className="input input-bordered flex items-center gap-2 w-[90%] md:w-[50%]">
                    <input onChange={handlesearch} name='search' type="text" placeholder="Search" className="input w-full border-none" required />
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4 opacity-70"><path fillRule="evenodd" d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z" clipRule="evenodd" /></svg>
                </form>
            </div>
            <div className='grid grid-cols-1 gap-4 mt-10 pb-6'>

                <div className={count == 1 ? `hidden` : `flex justify-center items-center w-full `}>
                    <span className="loading loading-spinner text-red-500 loading-lg"></span>
                </div>
                {
                    service.map((item, i) => (
                        <div data-aos="fade-up"
                            data-aos-duration="800" className='flex flex-col sm:flex-row p-5 border-2 rounded-xl gap-5 border-[#ff515137]'>
                            <div data-aos="fade-up"
                                data-aos-duration="800" >
                                <img src={item.image} alt="" className='w-full sm:w-96 md:w-80 h-full rounded-xl' />
                            </div>

                            <div data-aos="fade-up"
                                data-aos-duration="800" className='flex flex-col gap-2'>
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
                                <Link to={`/services/${item._id}`}> <button className='bg-[#FF6C1A] w-72 text-black'>View Detail</button></Link>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>

    );
};

export default AllServices;