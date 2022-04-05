import React from 'react';
import DisplayItem from '../DisplayItem';
import data from '../../LibraryExtended';

const ReactItem = () => {
  const {img, content, url} = data.react;
  return <DisplayItem imageRoute={img} content={content} url={url} />;
};

export  {ReactItem};
