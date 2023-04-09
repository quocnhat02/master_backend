import axios from 'axios';
import React, { useEffect, useState } from 'react';
// https://hn.algolia.com/api/v1/search?query=react

const HackerNews = () => {
  const [hits, setHits] = useState([]);

  const handleFetchData = async () => {
    const response = await axios.get(
      'https://hn.algolia.com/api/v1/search?query=react'
    );

    setHits(response.data?.hits || []);
  };

  useEffect(() => {
    handleFetchData();
  }, []);

  return (
    <div>
      {hits.length > 0 &&
        hits.map((item, index) => <h3 key={item.title}>{item.title}</h3>)}
    </div>
  );
};

export default HackerNews;
