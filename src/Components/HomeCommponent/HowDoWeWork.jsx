import React from 'react';
import { GiCardPickup } from "react-icons/gi";
import { GiAutoRepair } from "react-icons/gi";
import { FaTruckPickup } from "react-icons/fa";
import AOS from 'aos';
import 'aos/dist/aos.css'; 

AOS.init({
    offset: 200,
    duration: 700,
    easing: 'ease-in-sine',
    delay: 100,
});

const HowDoWeWork = () => {
    return (
        <div>
            <div data-aos="fade-up"
     data-aos-duration="800">
                <h2 className='text-center mt-16'>HOW WE WORK</h2>
                <h1 className='text-center mt-2 font-bold mb-2'>Our Repair Process</h1>
                <div className='flex items-center justify-center'>

                    <div className='w-12 h-2 rounded-xl my-3 bg-[#FF6C1A]'></div>

                </div>
                <p className='px-[5%] md:px-[10%] xl:px-[25%] text-center mb-10'>At Jhotpot Service, we understand that dealing with broken equipment can be frustrating. That's why we're committed to providing a transparent and efficient repair process to get things back to working order quickly. Here's what you can expect when you bring your item to us:</p>
            </div>

            <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 mt-5 gap-5 px-5 sm:px-20 md:px-20 lg:px-40'>
                <div data-aos="fade-right" className='flex flex-col border-[1px] border-[#FF6C1A] rounded-xl py-5'>
                    <div className='flex justify-center pt-10 px-8 pb-5 gap-2 items-center'>
                        <GiCardPickup className='text-5xl' />
                        <h1 className='text-3xl font-bold'>Drop off Broken Device</h1>
                    </div>
                    <div className='flex h-full flex-col justify-between '>
                        <p className='px-8 font-bold'>Begin the repair journey by entrusting your malfunctioning device to our skilled technicians. Our friendly staff will welcome you and swiftly document the issues with your device, ensuring a seamless transition to the repair phas</p>
                        <h1 className='font-bold px-8 mt-4'>01.</h1>
                    </div>
                </div>

                <div data-aos="fade-up-right" className='border-[1px] border-[#FF6C1A] rounded-xl py-5'>
                    <div className='flex justify-center pt-10 px-8 pb-5 gap-2 items-center'>
                        <FaTruckPickup className='text-5xl' />
                        <h1 className='text-3xl font-bold'>Quick Device Repair</h1>
                    </div>
                    <p className='px-8 font-bold'>Once your device is in our capable hands, our proficient technicians will promptly diagnose and address the root cause of the problem. Utilizing state-of-the-art tools and techniques, we prioritize efficiency without compromising on quality, striving to restore your device to its optimal functionality in the shortest possible time frame.</p>
                    <h1 className='font-bold px-8 mt-4'>02.</h1>
                </div>

                <div data-aos="fade-left" className='border-[1px] flex flex-col border-[#FF6C1A] rounded-xl py-5'>
                    <div className='flex justify-center pt-10 px-8 pb-5 gap-2 items-center'>
                        <GiCardPickup className='text-5xl' />
                        <h1 className='text-3xl font-bold'>Pick Up Repaired Device</h1>
                    </div>
                    <p className='px-8 font-bold'>Your repaired device awaits its reunion with you. Upon completion of the repair process, we'll notify you promptly, ensuring your convenience in collecting your device. Rest assured, it will be returned to you in impeccable condition, ready to resume its role in your daily life.</p>
                    <h1 className='font-bold px-8 mt-4 mt-auto'>03.</h1>
                </div>
            </div>
        </div>
    );
};

export default HowDoWeWork;