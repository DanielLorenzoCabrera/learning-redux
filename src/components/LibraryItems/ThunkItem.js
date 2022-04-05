import React from 'react';
import DisplayItem from '../DisplayItem';
import data from '../../LibraryExtended';

const ThunkItem = () => {
  const {img, content, url} = data.thunk;
  return <DisplayItem imageRoute={img} content={content} url={url} />;
};

export {ThunkItem};
