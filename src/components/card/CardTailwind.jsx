/* eslint-disable jsx-a11y/alt-text */
import React from 'react';

const CardTailwind = () => {
  return (
    <div className='relative'>
      <div className='w-full rounded-lg h-[400px]'>
        <img
          className='block w-full h-full object-cover rounded-lg'
          src='https://wallpaperaccess.com/full/54671.jpg'
        />
      </div>
      <div className='absolute left-2/4 -translate-x-2/4 translate-y-2/4 bottom-0 bg-white z-10 rounded-[20px] p-5 w-[calc(100%-36px)]'>
        <div className='flex justify-between items-center mb-8'>
          <div className='flex items-center gap-x-3'>
            <img
              className='w-8 h-8 rounded-full object-cover flex-shrink-0'
              src='https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8YXZhdGFyfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60'
              alt=''
            />
            <div className='font-light text-base text-[#333]'>@nhatnguyen</div>
          </div>
          <div className='flex items-center'>256</div>
        </div>
        <div className='flex items-center justify-between'>
          <div className='text-lg font-medium'>ReactJS</div>
          <span className='text-lg font-bold'>12,000 VND</span>
        </div>
      </div>
    </div>
  );
};

export default CardTailwind;
