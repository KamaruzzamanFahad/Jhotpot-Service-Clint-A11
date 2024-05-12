import React from 'react';
import Banner from '../Components/HomeCommponent/Banner';
import PopullerService from '../Components/HomeCommponent/PopullerService';
import { Helmet } from 'react-helmet-async';
import HowDoWeWork from '../Components/HomeCommponent/HowDoWeWork';
import OurTeam from '../Components/HomeCommponent/OurTeam';
import Testimonial from '../Components/HomeCommponent/Testimonial';

const Home = () => {
    return (
        <div>
            <Helmet><title>Home</title></Helmet>
            <Banner></Banner>
            <PopullerService></PopullerService>
            <HowDoWeWork></HowDoWeWork>
            <OurTeam></OurTeam>
            <Testimonial></Testimonial>
        </div>
    );
};

export default Home;