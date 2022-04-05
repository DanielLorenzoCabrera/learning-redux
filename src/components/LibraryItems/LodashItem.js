import React from 'react';
import DisplayItem from '../DisplayItem';
import data from '../../LibraryExtended';

const LodashItem = () => {
  const {img, content, url} = data.lodash;
  return <DisplayItem imageRoute={img} content={content} url={url}/>;
};

export {LodashItem};
