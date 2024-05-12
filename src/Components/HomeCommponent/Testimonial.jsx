import { useState } from "react";
import { FaGoogle } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { IoLogoLinkedin } from "react-icons/io";
import { Link } from "react-router-dom";

const Testimonial = () => {

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
        <div data-aos="fade-up"
        data-aos-duration="800" className='px-5 sm:px-20 md:px-20 lg:px-40 mb-20'>
            <div data-aos="fade-up"
     data-aos-duration="800">
                <h2 data-aos="fade-up"
     data-aos-duration="800" className='text-right mt-28'>TESTIMONIALS</h2>
                <h1 data-aos="fade-up"
     data-aos-duration="800" className='text-right mt-2 font-bold mb-2'>What Our Customers Say?</h1>
                <div data-aos="fade-up"
     data-aos-duration="800" className='flex items-end justify-end'>

                    <div className='w-12 h-2 rounded-xl my-3 bg-[#FF6C1A]'></div>

                </div>
                <div data-aos="fade-up"
     data-aos-duration="800" className="flex w-full justify-end ">
                    <p className='text-right w-[90%] md:w-[70%] lg:w-[50%]'>Our customers rave about our exceptional service! Read on to discover what they have to say about their experiences with us.</p>
                </div>
            </div>

            <div data-aos="fade-up"
     data-aos-duration="800" className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 mt-5 gap-5'>
                <div data-aos="fade-up"
     data-aos-duration="800" className='flex flex-col border-[1px] border-opacity-[10%] border-[#ffffff54] rounded-xl p-5'>
                    <section data-aos="fade-up"
     data-aos-duration="800" class="bg-white dark:bg-gray-900">
                        <div data-aos="fade-up"
     data-aos-duration="800" class="max-w-screen-xl px-4 py-8 mx-auto text-center lg:py-16 lg:px-6">
                            <figure data-aos="fade-up"
     data-aos-duration="800" class="max-w-screen-md mx-auto">
                                <svg class="h-12 mx-auto mb-3 text-gray-400 dark:text-gray-600" viewBox="0 0 24 27" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M14.017 18L14.017 10.609C14.017 4.905 17.748 1.039 23 0L23.995 2.151C21.563 3.068 20 5.789 20 8H24V18H14.017ZM0 18V10.609C0 4.905 3.748 1.038 9 0L9.996 2.151C7.563 3.068 6 5.789 6 8H9.983L9.983 18L0 18Z" fill="currentColor" />
                                </svg>
                                <blockquote>
                                    <p class="text-2xl font-medium text-gray-900 dark:text-white">"The Repair Team surpassed all my expectations! Their professionalism and attention to detail were evident from start to finish. I'm extremely satisfied with their work!"</p>
                                </blockquote>
                                <figcaption class="flex items-center justify-center mt-6 space-x-3">
                                    <img class="w-6 h-6 rounded-full" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/michael-gouch.png" alt="" />
                                    <div class="flex items-center divide-x-2 divide-gray-500 dark:divide-gray-700">
                                        <div class="pr-3 font-medium text-gray-900 dark:text-white">Emily W.</div>
                                        <div class="pl-3 text-sm font-light text-gray-500 dark:text-gray-400">Our Happy Customer</div>
                                    </div>
                                </figcaption>
                            </figure>
                        </div>
                    </section>
                </div>

                <div className='flex flex-col border-[1px] border-opacity-[10%] border-[#ffffff54] rounded-xl p-5'>
                    <section class="bg-white dark:bg-gray-900">
                        <div class="max-w-screen-xl px-4 py-8 mx-auto text-center lg:py-16 lg:px-6">
                            <figure class="max-w-screen-md mx-auto">
                                <svg class="h-12 mx-auto mb-3 text-gray-400 dark:text-gray-600" viewBox="0 0 24 27" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M14.017 18L14.017 10.609C14.017 4.905 17.748 1.039 23 0L23.995 2.151C21.563 3.068 20 5.789 20 8H24V18H14.017ZM0 18V10.609C0 4.905 3.748 1.038 9 0L9.996 2.151C7.563 3.068 6 5.789 6 8H9.983L9.983 18L0 18Z" fill="currentColor" />
                                </svg>
                                <blockquote>
                                    <p class="text-2xl font-medium text-gray-900 dark:text-white">"I couldn't be happier with the service provided by the Repair Team. They were courteous, efficient, and solved my problem in no time. I highly recommend their expertise!"</p>
                                </blockquote>
                                <figcaption class="flex items-center justify-center mt-6 space-x-3">
                                    <img class="w-6 h-6 rounded-full" src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/3a/Style_-_Wouldn%27t_It_Be_Nice.png/300px-Style_-_Wouldn%27t_It_Be_Nice.png" alt="" />
                                    <div class="flex items-center divide-x-2 divide-gray-500 dark:divide-gray-700">
                                        <div class="pr-3 font-medium text-gray-900 dark:text-white"> David S.</div>
                                        <div class="pl-3 text-sm font-light text-gray-500 dark:text-gray-400">Our Happy Customer</div>
                                    </div>
                                </figcaption>
                            </figure>
                        </div>
                    </section>
                </div>

                <div className='flex flex-col border-[1px] border-opacity-[10%] border-[#ffffff54] rounded-xl p-5'>
                    <section class="bg-white dark:bg-gray-900">
                        <div class="max-w-screen-xl px-4 py-8 mx-auto text-center lg:py-16 lg:px-6">
                            <figure class="max-w-screen-md mx-auto">
                                <svg class="h-12 mx-auto mb-3 text-gray-400 dark:text-gray-600" viewBox="0 0 24 27" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M14.017 18L14.017 10.609C14.017 4.905 17.748 1.039 23 0L23.995 2.151C21.563 3.068 20 5.789 20 8H24V18H14.017ZM0 18V10.609C0 4.905 3.748 1.038 9 0L9.996 2.151C7.563 3.068 6 5.789 6 8H9.983L9.983 18L0 18Z" fill="currentColor" />
                                </svg>
                                <blockquote>
                                    <p class="text-2xl font-medium text-gray-900 dark:text-white">"Kudos to the Repair Team for their outstanding work! Their knowledge and skill were truly impressive. I won't hesitate to contact them again for any future repair needs."</p>
                                </blockquote>
                                <figcaption class="flex items-center justify-center mt-6 space-x-3">
                                    <img class="w-6 h-6 rounded-full" src="https://images.pexels.com/photos/1516680/pexels-photo-1516680.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" />
                                    <div class="flex items-center divide-x-2 divide-gray-500 dark:divide-gray-700">
                                        <div class="pr-3 font-medium text-gray-900 dark:text-white">Jessica L.</div>
                                        <div class="pl-3 text-sm font-light text-gray-500 dark:text-gray-400">Our Happy Customer</div>
                                    </div>
                                </figcaption>
                            </figure>
                        </div>
                    </section>
                </div>

            </div>
        </div>
    );
};

export default Testimonial;