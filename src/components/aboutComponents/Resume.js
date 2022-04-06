import React from 'react';
import {View, Image, Text, StyleSheet} from 'react-native';
import colors from '../../../config/colors';

const Resume = () => {
  const {resume, imageStyle, imageContainer, textContainer, profileName, profileJob} = styles;
  const img = require('../../../assets/img/profile.jpg');

  return (
    <View style={resume}>
      <View style={imageContainer}>
        <Image source={img} style={imageStyle} />
      </View>
      <View style={textContainer}>
        <Text style={profileName}>Daniel Lorenzo</Text>
        <Text style={profileJob}>Junior Developer</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  resume: {
    flex: 1,
    flexDirection : 'column',
    alignItems: 'center',
    justifyContent : 'space-around'
  },
  imageStyle: {
    flex: 1,
    maxHeight : '100%',
    maxWidth : '100%',
    borderRadius : 100
  },
  imageContainer: {
    flex: 1,
    maxHeight : 200,
    maxWidth : 200,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius : 300,
    borderWidth : 8,
    borderColor : colors.primary
  },
  textContainer: {
    flexDirection : 'column',
    alignItems : 'center',
},
profileName : {
      color : colors.primary,
      fontSize : 30
    },
    profileJob : {
      color : colors.primary,
      fontSize : 20
  }
});

export {Resume};
