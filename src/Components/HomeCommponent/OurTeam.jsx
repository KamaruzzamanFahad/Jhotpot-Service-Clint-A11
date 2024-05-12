import { useState } from "react";
import { FaGoogle } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { IoLogoLinkedin } from "react-icons/io";
import { Link } from "react-router-dom";

const OurTeam = () => {
    
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
        <div className='px-5 sm:px-20 md:px-20 lg:px-40'>
            <div data-aos="fade-up"
     data-aos-duration="800">
                <h2 className='text-left mt-28'>PROFESSIONAL AND HIGHLY TRAINED</h2>
                <h1 className='text-left mt-2 font-bold mb-2'>Our Repair Team</h1>
                <div className='flex items-center justify-start'>

                    <div className='w-12 h-2 rounded-xl my-3 bg-[#FF6C1A]'></div>

                </div>
                <p className='text-left w-[90%] md:w-[70%] lg:w-[50%]'>Expertly trained and seasoned professionals comprise our Repair Team, equipped with the skills and knowledge to handle any task with precision and efficiency.</p>
            </div>

            <div data-aos="fade-up"
     data-aos-duration="800"  className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 mt-5 gap-5'>
                <div className='flex flex-col border-[1px] border-opacity-[10%] border-[#ffffff54] rounded-xl p-5'>
                    <img src="/team1.jpg" alt="" className='rounded-xl' />
                   <h1 className='font-bold text-xl mt-3'>Bill Mark</h1>
                   <p className='font-bold opacity-70'>CEO/Founder</p>
                   <div className='w-12 h-2 rounded-xl my-3 bg-[#FF6C1A]'></div>
                   <div className="flex gap-5">
                        <Link className={`${theme} opacity-75 text-xl`} to={'/'} ><FaGoogle /></Link>
                        <Link className={`${theme} opacity-75 text-xl`} to={'/'} ><FaFacebook /></Link>
                        <Link className={`${theme} opacity-75 text-2xl`} to={'/'} ><IoLogoLinkedin /></Link>
                    </div>
                </div>

                <div data-aos="fade-up"
     data-aos-duration="800" className='flex flex-col border-[1px] border-opacity-[10%] border-[#ffffff54] rounded-xl p-5'>
                    <img src="/team2.jpg" alt="" className='rounded-xl' />
                   <h1 className='font-bold text-xl mt-3'>Willis Maxwell </h1>
                   <p className='font-bold opacity-70'>Repair Technician</p>
                   <div className='w-12 h-2 rounded-xl my-3 bg-[#FF6C1A]'></div>
                   <div className="flex gap-5">
                        <Link className={`${theme} opacity-75 text-xl`} to={'/'} ><FaGoogle /></Link>
                        <Link className={`${theme} opacity-75 text-xl`} to={'/'} ><FaFacebook /></Link>
                        <Link className={`${theme} opacity-75 text-2xl`} to={'/'} ><IoLogoLinkedin /></Link>
                    </div>
                </div>

                <div data-aos="fade-up"
     data-aos-duration="800" className='flex flex-col border-[1px] border-opacity-[10%] border-[#ffffff54] rounded-xl p-5'>
                    <img src="/team3.jpg" alt="" className='rounded-xl' />
                   <h1 className='font-bold text-xl mt-3'>Gary Mark</h1>
                   <p className='font-bold opacity-70'>Repair Technician</p>
                   <div className='w-12 h-2 rounded-xl my-3 bg-[#FF6C1A]'></div>
                   <div className="flex gap-5">
                        <Link className={`${theme} opacity-75 text-xl`} to={'/'} ><FaGoogle /></Link>
                        <Link className={`${theme} opacity-75 text-xl`} to={'/'} ><FaFacebook /></Link>
                        <Link className={`${theme} opacity-75 text-2xl`} to={'/'} ><IoLogoLinkedin /></Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default OurTeam;