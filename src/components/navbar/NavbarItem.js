import React, {Component} from 'react';
import {View, StyleSheet, Image, TouchableWithoutFeedback} from 'react-native';
class NavbarItem extends Component {
  render() {
    const {navbarItemContainer, imageStyle, touchable} = styles;
    const {itemImage, onPress} = this.props;
    return (
      <View style={navbarItemContainer}>
        <TouchableWithoutFeedback style={touchable} onPress={onPress}>
          <View style={{flex:1}}>
            <Image style={imageStyle} source={itemImage} />
          </View>
        </TouchableWithoutFeedback>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  navbarItemContainer: {
    marginHorizontal: 5,
    flex: 1,
    borderWidth: 1,
    borderColor: 'black',
    borderRadius: 30,
  },
  touchable: {
    flex: 1,
  },
  imageStyle: {
    flex: 1,
    resizeMode: 'contain',
    maxWidth : '100%'
  },
});

export default NavbarItem;
