import React, { useContext, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import { AuthContext } from '../Provider/AuthProvider';

const ServiceDetils = () => {
    const { user } = useContext(AuthContext)
    const data = useLoaderData();
    const { _id, area, detils, email, image, name, price, userimage, username } = data;


    const [theme, settheme] = useState(localStorage.getItem('theme') ? localStorage.getItem('theme') : "light")
    window.addEventListener('click', function (event) {
        if (event.target.classList[0] == "toggle") {
            const theme = localStorage.getItem('theme')
            settheme(theme)
        }
    });
    const cardstyles = {
        color: (theme == "light") ? 'black' : 'rgb(240, 240, 240)',
        'background-color': (theme == "light") ? '#eeeeee' : '#1E1E1E',
    };

    const fildinput = {
        color: (theme == "light") ? 'black' : 'rgb(240, 240, 240)',
        'background-color': (theme == "light") ? 'white' : '#ffffff22',
    };


    const handlePurchase = (event) => {
        event.preventDefault();

        const serviceId = _id;
        const serviceName = name;
        const serviceImag = image;
        const providerEmail = email;
        const providerName = name;
        const Serviceprice = price;
        const userEMail = user.email;
        const userName = user.displayName;
        const serviceDate = event.target.serviceDate.value;
        const instructions = event.target.instructions.value;
        const status = 'pending';
        const item = {
            serviceId,
            serviceName,
            serviceImag,
            providerEmail,
            providerName,
            Serviceprice,
            userEMail,
            userName,
            serviceDate,
            instructions,
            status,
        };
        console.log(item)
        
    }



    return (
        <div className='p-0 md:p-10 sm:pl-0 md:pl-[15%] lg:pl-[25%] sm:px-0 md:px-[3%]  lg:px-[10%]'>
            <div className='flex gap-3'>
                <img src={userimage} alt="" className='w-14' />
                <div>
                    <p className='text-xl font-semibold mx-auto'>{username}</p>
                    <p>{area}</p>
                </div>
            </div>

            <div className='sm:w-[100%] md:w-[80%]'>
                <div className='rounded-xl'>
                    <img src={image} alt="" className='rounded-xl p-4 ' />
                </div>
                <div className='p-3 flex flex-col gap-2'>
                    <h1>{name}</h1>
                    <p className=''>{detils}</p>
                    <div className='flex justify-start items-center gap-3'>
                        <img src={userimage} alt="" className='w-10 rounded-full' />
                        <div>
                            <p className='text-xl font-semibold'>{username}</p>
                        </div>
                    </div>
                    <p className='font-semibold'>{price}</p>
                    <button onClick={() => document.getElementById('my_modal_4').showModal()} className='bg-[#FF6C1A] w-[50%]'>Book Now</button>
                </div>
            </div>

            {/* You can open the modal using document.getElementById('ID').showModal() method */}
            <dialog id="my_modal_4" className="modal">
                <div style={cardstyles} className="modal-box">
                    <form onSubmit={handlePurchase} className='flex flex-col'>
                        <p className='text-sm mt-2'>ServiceId</p>
                        <input style={fildinput} type="text" readOnly value={_id} placeholder="ServiceId" className="input input-bordered w-full" />
                        <p className='text-sm mt-2'>Service Name</p>
                        <input style={fildinput} type="text" readOnly value={name} placeholder="Service Name" className="input input-bordered w-full" />
                        <p className='text-sm mt-2'>Service Image</p>
                        <input style={fildinput} type="text" readOnly value={image} placeholder="Service Image" className="input input-bordered w-full" />
                        <p className='text-sm mt-2'>Provider email</p>
                        <input style={fildinput} type="text" readOnly value={email} placeholder="Provider email" className="input input-bordered w-full" />
                        <p className='text-sm mt-2'>Provider Name</p>
                        <input style={fildinput} type="text" readOnly value={username} placeholder="Provider Name" className="input input-bordered w-full" />
                        <p className='text-sm mt-2'>Current User email</p>
                        <input style={fildinput} type="text" readOnly value={user.email} placeholder="Current User email" className="input input-bordered w-full" />
                        <p className='text-sm mt-2'>Current User Name</p>
                        <input style={fildinput} type="text" readOnly value={user.displayName} placeholder="Current User Name" className="input input-bordered w-full" />
                        <p className='text-sm mt-2'>Service Taking Date</p>
                        <input style={fildinput} name='serviceDate' required type="date" placeholder="Service Taking Date" className="input input-bordered w-full" />
                        <p className='text-sm mt-2'>Price</p>
                        <input style={fildinput} readOnly value={price} type="text" placeholder="Price" className="input input-bordered w-full" />
                        <p className='text-sm mt-2'>Special instruction</p>
                        <textarea style={fildinput} required placeholder="anything like address , area, customized service plan." name="instructions" id="" className="input input-bordered w-full"></textarea>
                        <button className='bg-[#FF6C1A] w-full mt-2 '>Purchase</button>
                    </form>
                    <div className="modal-action">
                        <form method="dialog">
                            {/* if there is a button, it will close the modal */}
                            <button className="">X</button>
                        </form>
                    </div>
                </div>
            </dialog>
        </div>
    );
};

export default ServiceDetils;