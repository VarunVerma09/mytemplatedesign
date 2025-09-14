import React from 'react';
import { useForm } from 'react-hook-form';
import bg from "../assets/bg5.jpg"
import axios from 'axios';

const Contact = () => {
        const {
    register,
    handleSubmit,
    reset,
  
  } = useForm()
  
  const userData =(data)=>{
   
axios.post("http://localhost:2000/user", data).then(res =>{
    console.log("Data sent:", res.data);
    reset()
    
   })

  }

 return (
        <div id='contact' className='bg-center bg-no-repeat w-370 rounded-2xl    h-screen mb-30' style={{background:`url(${bg})`}}>
            <h1 className='uppercase text-center   text-4xl font-black'>Contact Us</h1>
            <div className='mt-50 text-center'>
                <form onSubmit={handleSubmit(userData)} >
                <input type="text" placeholder='Name' {...register("Name", { required: true })} className='px-5 py-5 border-none bg-white rounded-2xl mr-10 w-70'/>   
                     <input type="text" placeholder='Email' {...register("email", { required: true })} className='px-5 w-70 py-5 border-none bg-white rounded-2xl'/><br />
                <textarea name="" id="" {...register("Querry", { required: true })} className=' px-5 py-5 w-3xl mt-10 h-50 rounded-2xl bg-white' placeholder='Enter Your Querry'></textarea><br />
                <input type="submit" value="Submit" className='px-6 py-3 bg-orange-400 text-white cursor-pointer shadow rounded-2xl mt-4 border' />
           </form> 
           </div>
           
        </div>
    );
}

export default Contact;
