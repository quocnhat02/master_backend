/* eslint-disable jsx-a11y/alt-text */
import React from 'react';
import styled from 'styled-components';

const StyledCard = styled.div`
  position: relative;
`;
const CardImage = styled.div`
  height: 400px;
  width: 400px;
  border-radius: 8px;
`;
const CardImg = styled.img`
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: inherit;
`;
const CardContent = styled.div`
  position: absolute;
  left: 50%;
  transform: translate(-50%, 0);
  bottom: 0;
  background-color: white;
  z-index: 10;
  border-radius: 20px;
`;

const Card = () => {
  return (
    <StyledCard>
      <CardImage>
        <CardImg src='https://wallpaperaccess.com/full/54671.jpg' />
      </CardImage>
      <CardContent>
        <div>
          <div>
            <img
              src='https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8YXZhdGFyfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60'
              alt=''
            />
            <span>@nhatnguyen</span>
          </div>
          <div>256</div>
        </div>
        <div>
          <h3>ReactJS</h3>
          <span>12,000 VND</span>
        </div>
      </CardContent>
    </StyledCard>
  );
};

export default Card;
