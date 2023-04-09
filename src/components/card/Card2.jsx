/* eslint-disable jsx-a11y/alt-text */
import React from 'react';
import styled, { css } from 'styled-components';

const StyledCard = styled.div`
  position: relative;
  .card-image {
    height: 400px;
    width: 100%;
    border-radius: 8px;
  }
  img {
    display: block;
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: inherit;
  }
  .card-content {
    position: absolute;
    left: 50%;
    transform: translate(-50%, 50%);
    width: calc(100% - 36px);
    bottom: 0;
    background-color: white;
    z-index: 10;
    border-radius: 20px;
    padding: 20px;
  }
  .card-top {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 30px;
  }
  .card-user {
    display: flex;
    align-items: center;
    column-gap: 12px;
  }
  .user-avatar {
    width: 30px;
    height: 30px;
    border-radius: 100rem;
    object-fit: cover;
    flex-shrink: 0;
  }
  .user-name {
    font-weight: 300;
    font-size: 16px;
    color: #333;
  }
  .card-footer {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .card-title {
    font-size: 18px;
    font-weight: 500;
    ${'' /* color: ${(props) => props.theme.colors.blue}; */}
    color: green;
  }
  .card-amount {
    font-size: ${(props) => props.fontSize || '18px'};
    font-weight: bold;
    background: linear-gradient(
      90deg,
      rgba(244, 86, 232, 1) 0%,
      rgba(154, 253, 29, 1) 85%,
      rgba(69, 252, 198, 1) 100%
    );
    ${(props) =>
      props.secondary &&
      css`
        background: linear-gradient(
          90deg,
          rgba(86, 113, 244, 1) 0%,
          rgba(45, 238, 200, 1) 18%,
          rgba(187, 75, 227, 1) 85%
        );
      `};
    ${(props) =>
      !props.secondary &&
      css`
        background: linear-gradient(
          90deg,
          rgba(244, 86, 232, 1) 0%,
          rgba(154, 253, 29, 1) 85%,
          rgba(69, 252, 198, 1) 100%
        );
      `};
    color: transparent;
    -webkit-background-clip: text;
    background-clip: text;
  }
`;

const Card2 = (props) => {
  return (
    <StyledCard secondary={props.secondary}>
      <div className='card-image'>
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
    </StyledCard>
  );
};

export default Card2;
