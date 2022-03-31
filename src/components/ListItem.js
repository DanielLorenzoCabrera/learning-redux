import React from 'react';
import {View, StyleSheet, Text} from 'react-native';
import colors from './../../config/colors';

const ListItem = ({title, description}) => {
    const {itemContainer,titleStyle, descriptionStyle} = styles;
  return (
    <View style={itemContainer}>
      <Text style={titleStyle}>{title}</Text>
      <Text style={descriptionStyle}>{description}</Text>
    </View>
  );
};


const styles = StyleSheet.create({
    itemContainer : {
        flex: 1,
        
    },
    titleStyle : {
        flex: 1,
        backgroundColor : colors.primary,
        textAlign: 'center',
        fontSize: 20,
        paddingVertical : 10,
        fontWeight : 'bold',
        textTransform : 'uppercase',
        color : colors.secondary,
        borderWidth : 2,
        borderColor : colors.secondary
    },
    descriptionStyle: {
        backgroundColor : colors.base,
        fontSize: 20,
        padding: 10,
        display: 'none'
    }
});

export default ListItem;
