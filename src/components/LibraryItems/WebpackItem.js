import React from 'react';
import DisplayItem from '../DisplayItem';
import data from '../../LibraryExtended';

const WebpackItem = () => {
  const {img, content, url} = data.webpack;
  return <DisplayItem imageRoute={img} content={content} url={url} />;
};

export {WebpackItem};
