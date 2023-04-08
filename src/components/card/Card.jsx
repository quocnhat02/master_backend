/* eslint-disable jsx-a11y/alt-text */
import React from 'react';
import styled from 'styled-components';

const Card = () => {
  return (
    <div>
      <img src='https://wallpaperaccess.com/full/54671.jpg' />
      <div className=''>
        <div className=''>
          <div className=''>
            <img
              src='https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8YXZhdGFyfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60'
              alt=''
            />
            <span>@nhatnguyen</span>
          </div>
          <div className=''>256</div>
        </div>
        <div className=''>
          <h3>ReactJS</h3>
          <span>12,000 VND</span>
        </div>
      </div>
    </div>
  );
};

export default Card;
