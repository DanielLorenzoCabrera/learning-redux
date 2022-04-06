import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import NavbarItem from './NavbarItem';
import navbarImages from './navbarImages';

class Navbar extends Component {
  navigateTo(route, options = {}) {
    const {navigation} = this.props;
    navigation.navigate(route, options);
  }

  render() {
    const {navbarContainer} = styles;
    return (
      <View style={navbarContainer}>
        <NavbarItem
          itemImage={navbarImages.home}
          onPress={() => this.navigateTo('home')}
        />
        <NavbarItem
          itemImage={navbarImages.user}
          onPress={() => this.navigateTo('about')}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  navbarContainer: {
    width: '100%',
    height : '10%',
    flexDirection: 'row',
    padding: 10,
    marginTop: 20,
  },
});

export default Navbar;
