import React from 'react';
import DisplayItem from '../DisplayItem';
import data from '../../LibraryExtended';

const LodashItem = () => {
  const {img, content} = data.lodash;
  return <DisplayItem imageRoute={img} content={content} />;
};

export {LodashItem};
