import React from 'react';
import DisplayItem from '../DisplayItem';
import data from '../../LibraryExtended';

const ReduxItem = () => {
  const {img, content} = data.redux;
  return <DisplayItem imageRoute={img} content={content} />;
};

export {ReduxItem};
