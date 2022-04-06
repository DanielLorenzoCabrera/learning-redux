import React from 'react';
import {View, Image, Text, StyleSheet} from 'react-native';
import colors from '../../../config/colors';

const Section = ({title, content, theme, align}) => {
const {container, titleStyle, contentStyle} = styles;
  return (
    <View style={container}>
        <Text>{title}</Text>
        <Text>{content}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container : {
      flex: 1,
      borderColor : colors.primary,
      borderWidth : 4,
      flexDirection : 'column',
      justifyContent : 'space-around'
  },
  titleStyle : {},
  contentStyle : {}
});

export {Section};
