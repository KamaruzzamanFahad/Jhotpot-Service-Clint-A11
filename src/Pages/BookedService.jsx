import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../Provider/AuthProvider';

const BookedService = () => {
    const [service, setservice] = useState([])
    const [count, setcount] = useState(0)
    const { user } = useContext(AuthContext);
    useEffect(() => {
        axios.get(`http://localhost:5000/bookedservices?email=${user.email}`, { withCredentials: true })
            .then(res => {
                setservice(res.data)
                setcount(1)
            })
    }, [])
    console.log(service)

    const [theme, settheme] = useState(localStorage.getItem('theme') ? localStorage.getItem('theme') : "light")
    window.addEventListener('click', function (event) {
        if (event.target.classList[0] == "toggle") {
            const theme = localStorage.getItem('theme')
            settheme(theme)
        }
    });
    const cardstyles = {
        color: (theme == "light") ? 'black' : 'rgb(240, 240, 240)',
        'background-color': (theme == "light") ? '#eeeeee' : '#ffffff22',
    };

    const normal = {
        color: (theme == "light") ? 'black' : 'rgb(240, 240, 240)',
        'background-color': (theme == "light") ? 'white' : '#ffffff22',
    };

    return (
        <div>
            <div className='grid grid-cols-1 gap-5 mt-10'>

                <div className={count == 1 ? `hidden` : `flex justify-end items-cente w-full `}>
                    <span className="loading loading-spinner text-red-500 loading-lg"></span>
                </div>
                <h1 className='text-center'>Booked Service</h1>
                {
                    count == 1 && service.length == 0 ? <h1 className='text-center text-2xl'>you haven't booked any service yet</h1> :''
                }
                <table className="table">
                    {/* head */}
                    <thead className={count == 1 && service.length == 0 ? `hidden` : ``}>
                        <tr style={normal}>
                            <th>
                                <label>
                                    <input type="checkbox" className="checkbox" />
                                </label>
                            </th>
                            <th>serviceName</th>
                            <th>Price</th>
                            <th>Status</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* row 1 */}


                        {
                            service.map((item, i) => (
                                <tr>
                                    <td>
                                        <div className="flex items-center gap-3">
                                                <img src={item.serviceImag} alt=""  className='w-28  rounded-xl'/>
                                        </div>
                                    </td>
                                    <td>
                                        {item.serviceName}
                                        <br />
                                        <span style={cardstyles} className="badge badge-ghost badge-sm">{item.serviceDate}</span>
                                    </td>
                                    <td>{item.Serviceprice}</td>
                                    <th>
                                        <button className="btn btn-ghost btn-xs">{item.status}</button>
                                    </th>
                                </tr>
                            ))
                        }
                    </tbody>
                    {/* foot */}

                </table>
            </div>
            <div className={count == 1 ? `hidden` : `flex justify-center items-center`}>
                
            </div>


        </div>

    );
};

export default BookedService;