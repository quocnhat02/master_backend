/* eslint-disable jsx-a11y/alt-text */
import React, { useEffect, useRef, useState } from 'react';
import axios from 'axios';

const getRandomPhotos = async (page) => {
  try {
    const res = await axios.get(
      `http://jsonplaceholder.typicode.com/photos?_start=${page}&_limit=8`
    );
    console.log(res);
    return res.data;
  } catch (error) {
    return console.log(error);
  }
};

const Photos = () => {
  const [randomPhotos, setRandomPhotos] = useState([]);
  const [nextPage, setNextPage] = useState(0);

  const handleLoadMorePhotos = useRef();
  handleLoadMorePhotos.current = async () => {
    const images = await getRandomPhotos(nextPage);
    const newPhotos = [...randomPhotos, ...images];
    setRandomPhotos(newPhotos);
    setNextPage(nextPage + 1);
  };

  useEffect(() => {
    handleLoadMorePhotos.current();
  }, []);

  return (
    <div>
      <div className='grid grid-cols-4 gap-5 p-5'>
        {randomPhotos.length > 0 &&
          randomPhotos.map((item, index) => (
            <div
              key={`${item.id}${index}`}
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
          onClick={handleLoadMorePhotos.current}
          className='inline-block px-8 py-4 bg-purple-600 text-white'
        >
          Load More
        </button>
      </div>
    </div>
  );
};

export default Photos;
