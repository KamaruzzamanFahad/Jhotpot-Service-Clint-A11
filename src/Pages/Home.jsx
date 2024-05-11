import React from 'react';
import Banner from '../Components/HomeCommponent/Banner';
import PopullerService from '../Components/HomeCommponent/PopullerService';
import { Helmet } from 'react-helmet-async';

const Home = () => {
    return (
        <div>
            <Helmet><title>Home</title></Helmet>
            <Banner></Banner>
            <PopullerService></PopullerService>
        </div>
    );
};

export default Home;