import React from 'react';
import {Pressable, Text, View, StyleSheet} from 'react-native';
import colors from '../../../config/colors';

const Tag = ({onPress, iconTag, style}) => {
    return (
    <View style={style}>
      <Pressable onPress={onPress} >
        <Text style={styles.textStyle}>{iconTag}</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
    textStyle : {
        color : colors.base,
        fontSize : 30,
        textAlign : 'center',
        fontWeight : 'bold'
    }
})

export default Tag;
