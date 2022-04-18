import React from 'react';
import {Pressable, Text, View, StyleSheet} from 'react-native';
import colors from '../../../config/colors';

const Tag = ({onPress, iconTag, style}) => {
    const {touchable, textStyle} = styles;
    return (
    <View style={style}>
      <Pressable onPress={onPress} style={touchable}>
        <Text style={textStyle}>{iconTag}</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
    touchable : {
       
    },
    textStyle : {
        color : colors.base,
        fontSize : 30,
        textAlign : 'center',
        fontWeight : 'bold'
    }
})

export default Tag;
