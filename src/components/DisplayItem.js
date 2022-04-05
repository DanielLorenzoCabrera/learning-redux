import React from 'react';
import {View, Image, Text,StyleSheet}  from 'react-native';

const DisplayItem = ({image, content}) => {
    const {displayContainer} = styles;
    return(
        <View style={displayContainer}>
            <View>
                <Image/>
            </View>
            <Text>{content}</Text>
        </View>
    )
}


const styles = StyleSheet.create({
    displayContainer : {
        backgroundColor : 'red'
    }
})


export default DisplayItem;