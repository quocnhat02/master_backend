/* eslint-disable jsx-a11y/alt-text */
import React, { useEffect, useState } from 'react';
import axios from 'axios';

const getRandomPhotos = (page) => {
  return axios
    .get(`http://jsonplaceholder.typicode.com/photos?_start=${page}&_limit=8`)
    .then((res) => {
      console.log(res);
      return res.data;
    })
    .catch((error) => console.log(error));
};

const Photos = () => {
  const [randomPhotos, setRandomPhotos] = useState([]);
  const [nextPage, setNextPage] = useState(0);

  const handleLoadMorePhotos = () => {
    getRandomPhotos(nextPage).then((images) => {
      console.log(images);
      setRandomPhotos(images);
      setNextPage(nextPage + 1);
    });
  };

  useEffect(() => {
    handleLoadMorePhotos();
  }, []);

  return (
    <div>
      <div className='grid grid-cols-4 gap-5 p-5'>
        {randomPhotos.length > 0 &&
          randomPhotos.map((item, index) => (
            <div
              key={item.id}
              className='p-3 bg-white shadow-md rounded-lg h-[200px]'
            >
              <img
                src={item.url}
                alt={item.title}
                className='w-full h-full object-cover rounded-lg'
              />
            </div>
          ))}
      </div>
      <div className='text-center'>
        <button
          onClick={handleLoadMorePhotos}
          className='inline-block px-8 py-4 bg-purple-600 text-white'
        >
          Load More
        </button>
      </div>
    </div>
  );
};

export default Photos;
