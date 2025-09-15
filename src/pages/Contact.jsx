import React from 'react';
import { useForm } from 'react-hook-form';
import bg from "../assets/bg5.jpg";
import axios from 'axios';

const Contact = () => {
  const { register, handleSubmit, reset } = useForm();

  const userData = (data) => {
    axios.post("http://localhost:2000/user", data).then(res => {
      console.log("Data sent:", res.data);
      reset();
    });
  };

  return (
    <div
      id='contact'
      className='bg-center bg-no-repeat bg-cover w-full h-screen mb-30 rounded-2xl flex flex-col justify-center items-center px-4 sm:px-6'
      style={{ background: `url(${bg})` }}
    >
      <h1 className='uppercase text-center text-3xl sm:text-4xl font-black mb-6'>
        Contact Us
      </h1>
      <div className='w-full max-w-xl text-center'>
        <form onSubmit={handleSubmit(userData)} className='flex flex-col items-center gap-4'>
          <div className='flex flex-col sm:flex-row justify-center gap-4 w-full'>
            <input
              type="text"
              placeholder='Name'
              {...register("Name", { required: true })}
              className='px-5 py-4 w-full sm:w-1/2 border-none bg-white rounded-2xl'
            />
            <input
              type="text"
              placeholder='Email'
              {...register("email", { required: true })}
              className='px-5 py-4 w-full sm:w-1/2 border-none bg-white rounded-2xl'
            />
          </div>

          <textarea
            {...register("Querry", { required: true })}
            className='px-5 py-4 w-full h-40 rounded-2xl bg-white resize-none'
            placeholder='Enter Your Querry'
          ></textarea>

          <input
            type="submit"
            value="Submit"
            className='px-6 py-3 bg-orange-400 text-white cursor-pointer shadow rounded-2xl border mt-2 w-40'
          />
        </form>
      </div>
    </div>
  );
};

export default Contact;
