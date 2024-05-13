import React, { useContext, useState } from 'react';
import { Link, NavLink, } from 'react-router-dom';
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
                        <li className={user ? `inline-block` : `hidden`}>
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
                       

                        <label className="swap swap-rotate">

                            {/* this hidden checkbox controls the state */}
                            <input checked={!isMarkchack} onChange={darklighandle} type="checkbox" className="toggle bg-transparent opacity-0" />

                            {/* sun icon */}
                            <svg className="swap-on fill-current w-10 h-10" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z" /></svg>

                            {/* moon icon */}
                            <svg className="swap-off fill-current w-10 h-10" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z" /></svg>

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