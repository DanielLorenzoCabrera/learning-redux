import React, {Component} from 'react';
import {View, StyleSheet} from 'react-native';
import LibraryList from './LibraryList';
import Navbar from './navbar/Navbar';
import colors from '../../config/colors';


class Home extends Component {
  render() {
    const {homeContainer} = styles;
    const {navigation} = this.props
    return (
      <View style={homeContainer}>
          <LibraryList navigation={navigation}/>
          <Navbar navigation={navigation}/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  homeContainer: {
    flex: 1,
    backgroundColor : colors.base
  },
});

export default Home;
