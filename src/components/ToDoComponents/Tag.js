import React from 'react';
import {TouchableWithoutFeedback, Text, View, StyleSheet} from 'react-native';
import colors from '../../../config/colors';

const Tag = ({onPress, iconTag, style}) => {
    const {touchable, textStyle} = styles;
    return (
    <View style={style}>
      <TouchableWithoutFeedback onPress={onPress} style={touchable}>
        <Text style={textStyle}>{iconTag}</Text>
      </TouchableWithoutFeedback>
    </View>
  );
};

const styles = StyleSheet.create({
    touchable : {
        flex : 1 ,
    },
    textStyle : {
        color : colors.base,
        fontSize : 30,
        textAlign : 'center',
        fontWeight : 'bold'
    }
})

export default Tag;
