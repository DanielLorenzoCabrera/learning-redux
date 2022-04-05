import React from 'react';
import DisplayItem from '../DisplayItem';
import data from '../../LibraryExtended';

const BabelItem = () => {
  const {img, content, url} = data.babel;
  return <DisplayItem imageRoute={img} content={content} url={url}/>;
};

export  {BabelItem};
