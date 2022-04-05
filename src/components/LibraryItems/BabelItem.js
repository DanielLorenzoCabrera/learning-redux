import React from 'react';
import DisplayItem from '../DisplayItem';
import data from '../../LibraryExtended';

const BabelItem = () => {
  const {img, content} = data.babel;
  return <DisplayItem imageRoute={img} content={content} />;
};

export  {BabelItem};
