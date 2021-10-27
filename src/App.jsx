/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';

import SearchBox from './components/SearchBox';
import ImagesGrid from './components/ImagesGrid';
import { fetchImages } from './helpers';

import './styles.scss';

const App = () => {
  const [lastQuery, setLastQuery] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);
  const [images, setImages] = useState(null);
  const renderImages = Boolean(images);

  const searchImages = async (query) => {
    if (lastQuery === query) return;

    setError(false);
    setIsLoading(true);

    try {
      const response = await fetchImages(query);
      const data = await response.json();
      setLastQuery(query);
      setImages(data.hits);
      setIsLoading(false);
    } catch (err) {
      setError(true);
      setIsLoading(false);
    }
  };

  return (
    <div className="wrapper">
      <SearchBox fullScreen={!renderImages} isLoading={isLoading} onSubmit={searchImages} />
      <ImagesGrid images={images} isLoading={isLoading} error={error} />
    </div>
  );
};

export default App;
