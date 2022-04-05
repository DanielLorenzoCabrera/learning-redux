import React from 'react';
import DisplayItem from '../DisplayItem';
import data from '../../LibraryExtended';

const ReduxItem = () => {
  const {img, content, url} = data.redux;
  return <DisplayItem imageRoute={img} content={content} url={url}/>;
};

export {ReduxItem};
