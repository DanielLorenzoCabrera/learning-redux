import React from 'react';
import DisplayItem from '../DisplayItem';
import data from '../../LibraryExtended';

const ThunkItem = () => {
  const {img, content} = data.thunk;
  return <DisplayItem imageRoute={img} content={content} />;
};

export {ThunkItem};
