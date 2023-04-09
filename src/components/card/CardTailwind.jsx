/* eslint-disable jsx-a11y/alt-text */
import React from 'react';

const CardTailwind = () => {
  return (
    <div className='relative'>
      <div className='w-full rounded-lg h-[400px]'>
        <img src='https://wallpaperaccess.com/full/54671.jpg' />
      </div>
      <div className='card-content'>
        <div className='card-top'>
          <div className='card-user'>
            <img
              className='user-avatar'
              src='https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8YXZhdGFyfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60'
              alt=''
            />
            <div className='user-name bg-red-500'>@nhatnguyen</div>
          </div>
          <div className='bg-red-500'>256</div>
        </div>
        <div className='card-footer'>
          <div className='card-title'>ReactJS</div>
          <span className='card-amount'>12,000 VND</span>
        </div>
      </div>
    </div>
  );
};

export default CardTailwind;
