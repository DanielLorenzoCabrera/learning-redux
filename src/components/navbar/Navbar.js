import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import NavbarItem from './NavbarItem';
import navbarImages from './navbarImages';
import colors from '../../../config/colors';

class Navbar extends Component {
  render() {
    const {navbarContainer} = styles;
    return (
      <View style={navbarContainer}>
        <NavbarItem itemImage={navbarImages.home}/>
        <NavbarItem itemImage={navbarImages.user}/>
        <NavbarItem itemImage={navbarImages.user}/>
        <NavbarItem itemImage={navbarImages.user}/>
        
      </View>
    );
  }
}

const styles = StyleSheet.create({
  navbarContainer: {
    width: '100%',
    flex: 1/10,
    flexDirection : 'row',
    padding : 10,
    borderTopColor : colors.primary,
    borderTopWidth : 2,
    marginTop : 20
  },
});

export default Navbar;
