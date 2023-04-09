/* eslint-disable jsx-a11y/alt-text */
import React, { useEffect, useState } from 'react';
import axios from 'axios';

const getRandomPhotos = () => {
  return axios
    .get('https://jsonplaceholder.typicode.com/photos')
    .then((res) => {
      console.log(res);
      return res.data.slice(0, 10);
    })
    .catch((error) => console.log(error));
};

const Photos = () => {
  const [randomPhotos, setRandomPhotos] = useState([]);
  useEffect(() => {
    getRandomPhotos().then((images) => {
      console.log(images);
      setRandomPhotos(images);
    });
  }, []);

  return (
    <div className='grid grid-cols-5 gap-5 p-5'>
      {randomPhotos.length > 0 &&
        randomPhotos.map((item, index) => (
          <div key={item.id} className='p-3 bg-white shadow-md rounded-lg'>
            <img
              src={item.url}
              alt={item.title}
              className='w-full h-full object-cover rounded-lg'
            />
          </div>
        ))}
    </div>
  );
};

export default Photos;
