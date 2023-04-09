import React, { useEffect, useState } from 'react';
import axios from 'axios';

// https://piscum.photos/v2/list

const getRandomPhotos = () => {
  return axios
    .get('https://jsonplaceholder.typicode.com/photos')
    .then((res) => {
      console.log(res);
      return res.data.slice(0, 5);
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

  return <div>{JSON.stringify(randomPhotos)}</div>;
};

export default Photos;
