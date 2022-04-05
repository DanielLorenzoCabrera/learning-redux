import React from 'react';
import DisplayItem from '../DisplayItem';
import data from '../../LibraryExtended';

const WebpackItem = () => {
  const {img, content} = data.webpack;
  return <DisplayItem imageRoute={img} content={content} />;
};

export {WebpackItem};
