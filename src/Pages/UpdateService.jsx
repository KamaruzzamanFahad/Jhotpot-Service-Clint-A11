import { useContext, useEffect, useState } from 'react';
import Swal from 'sweetalert2'
import { AuthContext } from '../Provider/AuthProvider';
import { Helmet } from "react-helmet-async";
import usePostData from '../CustomHooks/usePostData';
import axios from 'axios';
import { useLocation, useParams } from 'react-router-dom';

const UpdateService = () => {

    const [theme, settheme] = useState(localStorage.getItem('theme') ? localStorage.getItem('theme') : "light")
    window.addEventListener('click', function (event) {
        if (event.target.classList[0] == "toggle") {
            const theme = localStorage.getItem('theme')
            settheme(theme)
        }
    });
    const cardthemesty = {
        color: (theme == "light") ? 'black' : 'rgb(240, 240, 240)',
        'background-color': (theme == "light") ? '#F4F3F0' : '#ffffff22',
    };

    const inputstylthem = {
        color: (theme == "light") ? 'black' : 'rgb(240, 240, 240)',
        'background-color': (theme == "light") ? 'white' : '#ffffff22',
    };

    const option = {
        color: (theme == "light") ? 'black' : 'white',
        'background-color': (theme == "light") ? 'white' : 'black',
    };



    const data = useLocation().state;
    const {_id,area,detils,email,image,name,price,username,userimage} = data;
    
    const { user } = useContext(AuthContext)
    const handlesubmit = (event) => {
        event.preventDefault();
        const form = event.target;

        const name = form.name.value;
        const price = form.price.value;
        const detils = form.detils.value;
        const image = form.image.value;
        const area = form.area.value;
        const username = user.displayName;
        const email = user.email;
        const userimage = user.photoURL;

        const item = { name, price, detils, image,area, username, email, userimage }
        console.log(item)

        axios.put(`http://localhost:5000/updateservice/${_id}`,item,{withCredentials: true})
            .then(res => {
                console.log(res.data)
                if (res.data.modifiedCount > 0) {
                    Swal.fire({
                        title: 'Success !',
                        text: 'Service Updated Successfully',
                        icon: 'success',
                        confirmButtonText: 'Ok'
                    })
                }
            })




    }


    return (
        <div className='px-[0%] sm:px-[10%]'>
            <Helmet>
                <title>Update Services</title>
            </Helmet>
            <div style={cardthemesty} className=' p-12 px-5 md:px-20 rounded-3xl'>

                <form onSubmit={handlesubmit} action="" className='grid grid-cols-1 md:grid-cols-2 gap-5 mt-5'>
                    <div className='flex gap-3'>
                        <img src={user.photoURL} alt="" className='w-14' />
                        <div>
                            <p className='text-xl font-semibold'>{user.displayName}</p>
                            <p>{user.email}</p>
                        </div>
                    </div>
                    <div className='md:col-span-2'>
                        <h2 className='mb-2 font-semibold'>Service Image</h2>
                        <input defaultValue={image} style={inputstylthem} required className='w-full p-2 outline-none' type="url" placeholder='Enter Image URL' name='image' />
                    </div>
                    <div className='md:col-span-2'>
                        <h2 className='mb-2 font-semibold'>Service Name</h2>
                        <input defaultValue={name} style={inputstylthem} required className='w-full p-2 outline-none' type="text" placeholder='Enter Service Name' name='name' />
                    </div>
                    <div>
                        <h2 className='mb-2 font-semibold'>Price</h2>
                        <input defaultValue={price} style={inputstylthem} required className='w-full p-2 outline-none' type="text" placeholder='Enter Service price' name='price' />
                    </div>
                    <div>
                        <h2 className='mb-2 font-semibold'>Service Area</h2>
                        <input defaultValue={area} style={inputstylthem} required className='w-full p-2 outline-none' type="text" placeholder='Enter Service Area' name='area' />
                    </div>
                    <div className='md:col-span-2'>
                        <h2 className='mb-2 font-semibold'>Description</h2>
                        <textarea defaultValue={detils} style={inputstylthem} required className='w-full p-2 outline-none' name="detils" cols="30" rows="5" placeholder='Enter Service Description'></textarea>

                    </div>
                    <button className='md:col-span-2 bg-[#FF6C1A] text-[#ffffff] border-2 border-[#331A15] rounded-xl font-bold'>Update Service</button>
                </form>
            </div>
        </div>
    );
};

export default UpdateService;