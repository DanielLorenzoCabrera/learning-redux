import React from 'react';
import DisplayItem from '../DisplayItem';
import data from '../../LibraryExtended';

const EslintItem = () => {
  const {img, content, url} = data.eslint;
  return <DisplayItem imageRoute={img} content={content} url={url}/>;
};

export {EslintItem};
