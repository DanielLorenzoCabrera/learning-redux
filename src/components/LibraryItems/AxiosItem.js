import React from 'react';
import DisplayItem from '../DisplayItem';
import data from '../../LibraryExtended';

const AxiosItem = () => {
  const {img, content, url} = data.axios;
  return <DisplayItem imageRoute={img} content={content} url={url} />;
};

export {AxiosItem};
