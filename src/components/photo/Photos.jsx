import React, { useEffect } from 'react';
import axios from 'axios';

// https://piscum.photos/v2/list

const GetPhotos = () => {
  return axios
    .get('https://piscum.photos/v2/list')
    .then((res) => {
      console.log(res);
    })
    .catch((error) => console.log(error));
};

const Photos = () => {
  // useEffect(function callback() {
  //     // side-effect
  // }, []);
  useEffect(() => {
    document.title = 'Welcome to useEffect';
  }, []);

  return <div>Photos</div>;
};

export default Photos;
