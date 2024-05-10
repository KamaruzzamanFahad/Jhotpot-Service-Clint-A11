import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';

const Banner = () => {
    return (
        <div>
            <Swiper
                navigation={true}
                modules={[Navigation]}
                loop={true}
                className="mySwiper z-0"
                autoplay={{
                    delay: 3000,
                    disableOnInteraction: true,
                }}
            >
                <SwiperSlide className='rounded-3xl'>
                    <div id="slide1" className="carousel-item relative h-[35vw] rounded-3xl w-full">
                        <img src="/slid1.jpeg" className="w-full rounded-3xl" />

                        <div className='absolute opacity-85 flex flex-col justify-start pt-0 sm:pt-12 md:pt-12 lg:pt-20 xl:pt-32 items-start pl-10 sm:pl-14 md:pl-24 lg:pl-52 xl:pl-72 bg-[#00000054] h-full top-0 text-center w-full rounded-3xl'>
                            <h1 className=' mb-2 text-white text-start font-extrabold text-xl sm:text-2x md:text-5xl'>Advanced Repair Tools <br />and Equipment </h1>
                            <p className=' text-sm md:text-lg lg:text-lg xl:xl text-white text-start w-[90%] sm:w-[70%] md:w-[60%] lg:w-[50%]'>Unleash the power of precision repairs. We utilize advanced tools and equipment to diagnose problems accurately and fix them efficiently. </p>
                            <button className='bg-[#FF6C1A] mt-3'> Learn More</button>
                        </div>

                    </div>
                </SwiperSlide>

                <SwiperSlide className='rounded-3xl'>
                    <div id="slide1" className="carousel-item relative h-[35vw] rounded-3xl w-full">
                        <img src="/slid2.jpg" className="w-full rounded-3xl" />

                        <div className='absolute opacity-85 flex flex-col justify-start pt-0 sm:pt-12 md:pt-12 lg:pt-20 xl:pt-32 items-start pl-10 sm:pl-14 md:pl-24 lg:pl-52 xl:pl-72 bg-[#00000054] h-full top-0 text-center w-full rounded-3xl'>
                            <h1 className=' mb-2 text-white text-start font-extrabold text-xl sm:text-2x md:text-5xl'>Fast & Efficient Repairs <br />for all devices</h1>
                            <p className=' text-sm md:text-lg lg:text-lg xl:xl text-white text-start w-[90%] sm:w-[70%] md:w-[60%] lg:w-[50%]'>Suffering from a tech meltdown? Don't wait! Our whiz-kid repair team tackles any device, fixing it fast and efficiently.</p>
                            <button className='bg-[#FF6C1A] mt-3'> Learn More</button>
                        </div>

                    </div>
                </SwiperSlide>

                <SwiperSlide className='rounded-3xl'>
                    <div id="slide1" className="carousel-item relative h-[35vw] rounded-3xl w-full">
                        <img src="/slid3.jpg" className="w-full rounded-3xl" />

                        <div className='absolute opacity-85 flex flex-col justify-start pt-0 sm:pt-12 md:pt-12 lg:pt-20 xl:pt-32 items-start pl-10 sm:pl-14 md:pl-24 lg:pl-52 xl:pl-72 bg-[#00000054] h-full top-0 text-center w-full rounded-3xl'>
                            <h1 className=' mb-2 text-white text-start font-extrabold text-xl sm:text-2x md:text-5xl'>Highly trained &<br />reliable repair team</h1>
                            <p className=' text-sm md:text-lg lg:text-lg xl:xl text-white text-start w-[90%] sm:w-[70%] md:w-[60%] lg:w-[50%]'>Our highly trained and reliable repair team is here to solve your problems. With expertise and a commitment to quality, we'll diagnose your issue accurately and fix it right the first time.</p>
                            <button className='bg-[#FF6C1A] mt-3'> Learn More</button>
                        </div>

                    </div>
                </SwiperSlide>
                
            </Swiper>

        </div>
    );
};

export default Banner;