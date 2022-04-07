import React, {useCallback} from 'react';
import {View, Image, Text, StyleSheet, ScrollView, Linking, Alert} from 'react-native';
import colors from '../../config/colors';
import RedirectButton from './RedirectButton';

const DisplayItem = ({imageRoute, content, url}) => {

  const {
    displayContainer,
    imageContainer,
    image,
    textContent,
    scrollContainer,
  } = styles;
  return (
    <View style={displayContainer}>
      <ScrollView style={scrollContainer}>
        <View style={imageContainer}>
          <Image source={imageRoute} style={image} resizeMode="contain" />
        </View>
        <Text style={textContent}>{content}</Text>
        <RedirectButton textButton={'Visit official site'} onPress={()=> Linking.openURL(url)}/>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  displayContainer: {
    flex: 1,
    backgroundColor: colors.base,
  },
  imageContainer: {
    flex: 1,
    height: 200,
    marginVertical: 30,
    backgroundColor: colors.base,
  },
  image: {
    flex: 1,
    height: undefined,
    width: undefined,
  },
  scrollContainer: {
    flex: 2,
  },
  textContent: {
    paddingHorizontal: 20,
    fontSize: 20,
    lineHeight: 40,
    backgroundColor: colors.base
  },
});

export default DisplayItem;
