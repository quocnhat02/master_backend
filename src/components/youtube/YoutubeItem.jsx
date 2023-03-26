/* eslint-disable jsx-a11y/alt-text */
import React from 'react';

const YoutubeItem = (props) => {
  return (
    <div className='youtube-item'>
      <div className='youtube-image'>
        <img src={props.image} />
      </div>
      <div className='youtube-footer'>
        <img className='youtube-avatar' src={props.avatar} />
        <div className='youtube-info'>
          <h3 className='youtube-title'>
            {props.title || 'This is example of title'}
          </h3>
          <h4 className='youtube-author'>{props.author || 'Anonymous'}</h4>
        </div>
      </div>
    </div>
  );
};

export default YoutubeItem;
