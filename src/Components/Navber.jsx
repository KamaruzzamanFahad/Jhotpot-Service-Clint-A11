import React, { useContext, useState } from 'react';
import {Link, NavLink, } from 'react-router-dom';
import { AuthContext } from '../Provider/AuthProvider';




const Navber = () => {


    const [theme, settheme] = useState(localStorage.getItem('theme') ? localStorage.getItem('theme') : "light")
    const [isMarkchack, setMarkchack] = useState((theme == "light") ? true : false)


    const darklighandle = (e) => {
        if (isMarkchack) {
            setMarkchack(false)
            localStorage.setItem("theme", "dark")
            settheme("dark")
        }
        else {
            setMarkchack(true)
            localStorage.setItem("theme", "light")
            settheme("light")
        }
        console.log(isMarkchack)
    }
    const cardthemesty = {
        color: (theme == "light") ? 'black' : 'rgb(240, 240, 240)',
        'background-color': (theme == "light") ? 'White' : 'Black',
    };

    const mebustyl = {
        color: (theme == "light") ? 'black' : 'white',
        'background-color': (theme == "light") ? '#e8e8e8' : 'black',
    };

    const { user, LogOut } = useContext(AuthContext)

    return (
        <div className='py-5'>


            <div className="navbar ">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </div>
                        <ul style={mebustyl} tabIndex={0} className="menu menu-sm dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52 z-[10]">
                            <li><NavLink to={'/'}>Home</NavLink></li>
                            <li><NavLink to={'/allservices'}>Services</NavLink></li>
                            <li className={user ? `inline-block` : `hidden`}>
                                <NavLink to={'/'}>Dashboard</NavLink>
                                <ul className="p-2 w-48 z-[20]">
                                    <li><NavLink to={'/addservice'}>Add Service</NavLink></li>
                                    <li><NavLink to={'/manageservice'}>Manage Service</NavLink></li>
                                    <li><NavLink to={'/bookedservices'}>Booked-Services</NavLink></li>
                                    <li><NavLink to={'/servicetodo'}>Service-To-Do</NavLink></li>
                                </ul>
                            </li>
                        </ul>
                    </div>
                    <Link to={'/'}>
                        <div>
                            <img className='w-32' src="/jotpotlogo.png" alt="" />
                            <p>Jhotpot Service</p>
                        </div>
                    </Link>
                </div>
                <div className="navbar-center hidden lg:flex">

                    <ul className="menu menu-horizontal px-1">
                        <li><NavLink to={'/'}>Home</NavLink></li>
                        <li><NavLink to={'/allservices'}>Services</NavLink></li>
                        <li  className={user ? `inline-block` : `hidden`}>
                            <details>
                                <summary>Dashboard</summary>
                                <ul style={mebustyl} className="p-2 w-56 z-[10]">
                                    <li><NavLink to={'/addservice'}>Add Service</NavLink></li>
                                    <li><NavLink to={'/manageservice'}>Manage Service</NavLink></li>
                                    <li><NavLink to={'/bookedservices'}>Booked-Services</NavLink></li>
                                    <li><NavLink to={'/servicetodo'}>Service-To-Do</NavLink></li>
                                </ul>
                            </details>
                        </li>
                    </ul>
                </div>
                <div className="navbar-end">

                    <div className="form-control mr-2">
                        <label className="label cursor-pointer">
                            <input checked={!isMarkchack} onChange={darklighandle} type="checkbox" className="toggle" />
                        </label>
                    </div>
                    {
                        user ? <>
                            <div className="dropdown dropdown-end dropdown-hover z-[10]">
                                <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar z-[10]">
                                    <div className="w-10 rounded-full">
                                        <img alt="user" src={user.photoURL} />
                                    </div>
                                </div>
                                <ul style={cardthemesty} tabIndex={0} className="mt-0 z-[1] p-2 shadow menu menu-sm dropdown-content bg-[#ececec] rounded-box w-52">
                                    <li><a >{user.displayName}</a ></li>
                                    <li><a onClick={LogOut}>Logout</a ></li>
                                </ul>
                            </div>
                        </>
                            : <div className='flex justify-end items-center flex-row'>
                                <NavLink to={'/login'}><button className=" text-black bg-[#FF6C1A]">Log In</button></NavLink>
                            </div>


                    }


                </div>


            </div>

        </div>
    );
};

export default Navber;