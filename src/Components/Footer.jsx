import { IoCall } from "react-icons/io5";
import { MdOutlineEmail } from "react-icons/md";
import { IoLocationSharp } from "react-icons/io5";
import { Link } from "react-router-dom";
import { useState } from "react";
import { FaGoogle } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { IoLogoLinkedin } from "react-icons/io";

const Footer = () => {

    const [theme, settheme] = useState(localStorage.getItem('theme') ? localStorage.getItem('theme') : "light")
    window.addEventListener('click', function (event) {
        if (event.target.classList[0] == "toggle") {
            const theme = localStorage.getItem('theme')
            settheme(theme)
        }
    });

    const inputstylthem = {
        color: (theme == "light") ? 'black' : 'rgb(240, 240, 240)',
        'background-color': (theme == "light") ? 'white' : '#ffffff22',
    };

    return (
        <div className={`${theme}`}>
            <footer className={`${theme} flex flex-col lg:flex-row gap-10 items-center  justify-between p-10`}>
                <div>
                    <div>
                        <Link to={'/'}>
                            <div>
                                <img className='w-32' src="/jotpotlogo.png" alt="" />
                                <p>Jhotpot Service</p>
                            </div>
                        </Link>

                        <p className="mr-[5%]">Electronic Item Repairing Services</p>
                    </div>

                    <div className='flex items-center gap-2 mt-5'>
                        <p className='font-extrabold text-xl'>Knowledge Hub</p>
                    </div>
                    <div className="mt-2">
                        <Link className={`${theme}`} to={'/'}> <p>Articles</p></Link>
                        <Link className={`${theme}`} to={'/'}> <p>FAQ</p></Link>
                        <Link className={`${theme}`} to={'/'}> <p>Our History</p></Link>
                    </div>
                </div>

                <div className='ml-[-60px] w-[60%] sm:w-auto '>
                    <div className='flex items-center gap-2'>
                        <p className='font-extrabold text-xl'>Repair Facilities Locations
                        </p>
                    </div>
                    <div className='flex items-center gap-2 text-lg mt-3'>
                        <IoLocationSharp className='text-3xl' />
                        <p>Puran Dhaka<br></br>
                            Bambu Way, Fna Plaja 20</p>
                    </div>
                    <div className='flex items-center gap-2 text-lg mt-2'>
                        <IoCall className='text-2xl' />
                        <p>+880 12345-6789</p>
                    </div>
                    <div className='flex items-center gap-2 text-lg mt-3'>
                        <MdOutlineEmail className='text-2xl' />
                        <p>service@jhotpot.com</p>
                    </div>
                </div>

                <form >
                    <div className='flex items-center gap-2 mb-4'>
                        <p className='font-extrabold text-xl'>Connect with us
                        </p>
                    </div>
                    <div className="flex gap-5">
                        <Link className={`${theme} opacity-75 text-xl`} to={'/'} ><FaGoogle /></Link>
                        <Link className={`${theme} opacity-75 text-xl`} to={'/'} ><FaFacebook /></Link>
                        <Link className={`${theme} opacity-75 text-2xl`} to={'/'} ><IoLogoLinkedin /></Link>
                    </div>

                    <div className='flex items-center gap-2 mt-4'>
                        <p className='font-extrabold text-xl'>Newsletter
                        </p>
                    </div>
                    <fieldset className="form-control ">
                        <label className="label">
                            <span>Enter your e-mail to get the latest Jhotpot Service info</span>
                        </label>
                        <div className="join mt-2 w-[95%]">
                            <input style={inputstylthem} type="text" placeholder="Your e-mail" className="input input-bordered join-item w-full" />
                            <button disabled className="bg-[#FF6C1A] text-white rounded-l-none ml-[-2px]">Subscribe</button>
                        </div>
                        <img src="socai.png" width={'30%'} alt="" className='mt-4' />
                    </fieldset>


                </form>
            </footer>

            <h1 className="text-center text-lg pb-5 opacity-55">Copyright © Jhotpot Service. !All Rights Reserved.</h1>
        </div>
    );
};

export default Footer;