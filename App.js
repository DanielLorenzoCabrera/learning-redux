/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';

import {SafeAreaView, StyleSheet, Text, View} from 'react-native';

import {createStore} from 'redux';
import {Provider} from 'react-redux';
import reducers from './src/reducers';
import LibraryList from './src/components/LibraryList';
import colors from './config/colors';
import RootComponent from './src/RootComponent';

const App = () => {
  const {container} = styles;
  
  return (
    <Provider store={createStore(reducers)}>
      <SafeAreaView style={container}>
        <RootComponent/>
      </SafeAreaView>
    </Provider>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor : colors.base
  },
});

export default App;
