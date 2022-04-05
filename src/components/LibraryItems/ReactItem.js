import React from 'react';
import DisplayItem from '../DisplayItem';
import data from '../../LibraryExtended';

const ReactItem = () => {
  const {img, content} = data.react;
  return <DisplayItem imageRoute={img} content={content} />;
};

export  {ReactItem};
