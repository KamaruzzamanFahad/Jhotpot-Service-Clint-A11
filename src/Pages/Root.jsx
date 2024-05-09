import React from 'react';
import Navber from '../Components/Navber';
import { Outlet } from 'react-router-dom';
import Footer from '../Components/Footer';
import { ToastContainer, toast } from 'react-toastify';
import { useEffect, useState } from 'react';
const Root = () => {

    const [theme, settheme] = useState(localStorage.getItem('theme') ? localStorage.getItem('theme') : "light")
    window.addEventListener('click', function (event) {
        if (event.target.classList[0] == "toggle") {
            const theme = localStorage.getItem('theme')
            settheme(theme)
        }
    });

    return (
        <div>
            <ToastContainer></ToastContainer>
            <div className={`${theme} px-[6%]`} >
                <Navber></Navber>
                <Outlet></Outlet>
            </div>
            <Footer></Footer>
        </div>

    );
};

export default Root;