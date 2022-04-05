import React from 'react';
import DisplayItem from '../DisplayItem';
import data from '../../LibraryExtended';

const AxiosItem = () => {
  const {img, content} = data.axios;
  return <DisplayItem imageRoute={img} content={content} />;
};

export {AxiosItem};
