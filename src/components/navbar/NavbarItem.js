import React, {Component} from 'react';
import {View, StyleSheet, Image, TouchableWithoutFeedback} from 'react-native';
class NavbarItem extends Component {
  render() {
    const {navbarItemContainer, imageStyle} = styles;
    const {itemImage, onPress} = this.props;
    return (
      <TouchableWithoutFeedback onPress={onPress}>
        <View style={navbarItemContainer}>
          <Image style={imageStyle} source={itemImage} />
        </View>
      </TouchableWithoutFeedback>
    );
  }
}

const styles = StyleSheet.create({
  navbarItemContainer: {
    borderWidth: 1,
    borderColor: 'black',
    borderRadius: 30,
    marginHorizontal: 5,
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center'
  },
  imageStyle: {
    flex: 1,
    resizeMode: 'contain',
  },
});

export default NavbarItem;
