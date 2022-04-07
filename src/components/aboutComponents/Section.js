import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import colors from '../../../config/colors';

const Section = ({title, content, theme}) => {

const {container, titleStyle, contentStyle, dark, light} = styles;
const actualTheme = theme === 'dark' ? dark : light;
  return (
    <View style={[container,actualTheme]}>
        <Text style={[titleStyle, actualTheme]}>{title}</Text>
        <Text style={[contentStyle, actualTheme]}>{content}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container : {
      flexDirection : 'column',
      justifyContent : 'space-around',
      minHeight : 100,
      padding : 15,
      
  },
  titleStyle : {
    fontSize : 30,
    fontWeight : 'bold',
    marginVertical : 20
  },
  contentStyle : {
    fontSize : 20,
    marginVertical : 10
  },
  dark : {
    backgroundColor : colors.primary,
    color : colors.base,
    textAlign : 'justify'
  },
  light : {
    backgroundColor : colors.base,
    color : colors.primary,
    textAlign : 'justify'
  }
});

export {Section};
