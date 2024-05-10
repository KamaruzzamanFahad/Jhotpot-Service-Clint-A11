import React from 'react';
import { useLoaderData } from 'react-router-dom';

const ServiceDetils = () => {
    const data = useLoaderData();
    const {area,detils,email,image,name,price,userimage,username} = data;
    return (
        <div>
            detils
        </div>
    );
};

export default ServiceDetils;