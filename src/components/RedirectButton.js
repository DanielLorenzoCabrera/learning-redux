import React from 'react';
import {TouchableWithoutFeedback, View, Text, StyleSheet} from 'react-native';
import colors from '../../config/colors';

const RedirectButton = ({onPress, textButton}) => {
  const {buttonContainer, text,buttonStyle} = styles;
  return (
    <TouchableWithoutFeedback onPress={onPress}>
      <View style={buttonContainer}>
        <View style={buttonStyle}>
          <Text style={text}>{textButton}</Text>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  buttonContainer: {
    flex: 1,
    flexDirection: 'column',
    padding: 10,
    alignItems: 'flex-end',
  },
  buttonStyle : {
      color: colors.primary,
      flex: 1 / 2,
      backgroundColor: colors.secondary,
      padding: 10,
      borderRadius: 10,

  },
  text: {
    textAlign: 'center',
    fontSize: 20,
    fontWeight: 'bold',
    color : colors.primary
  },
});

export default RedirectButton;
