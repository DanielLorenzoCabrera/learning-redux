import React, {Component} from 'react';
import {View, Image, Text, StyleSheet} from 'react-native';
import colors from '../../../config/colors';
import { connect } from 'react-redux';

class Resume extends Component {
  
  render() {
    console.log(Store.getState().colors)
    const {nameText, jobPosition} = this.props;
    const {
      resume,
      imageStyle,
      imageContainer,
      textContainer,
      profileName,
      profileJob,
    } = styles;
    const img = require('../../../assets/img/profile.jpg');

    return (
      <View style={resume}>
        <View style={imageContainer}>
          <Image source={img} style={imageStyle} />
        </View>
        <View style={textContainer}>
          <Text style={profileName}>{nameText}</Text>
          <Text style={profileJob}>{jobPosition}</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  resume: {
    height: 300,
    width: '100%',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'space-around',
    marginBottom: 10,
  },
  imageStyle: {
    flex: 1,
    maxHeight: '100%',
    maxWidth: '100%',
    borderRadius: 100,
  },
  imageContainer: {
    flex: 1,
    maxHeight: 200,
    maxWidth: 200,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 300,
    borderWidth: 3,
    borderColor: colors.primary,
    backgroundColor: colors.base,
    padding: 3,
  },
  textContainer: {
    flexDirection: 'column',
    alignItems: 'center',
  },
  profileName: {
    color: Store.getState().colors.secondary.toString(),
    fontSize: 30,
    fontWeight: 'bold',
  },
  profileJob: {
    color: colors.primary,
    fontSize: 20,
  },
});

const mapStateToProps = state => {
  return state;
}

export default connect(mapStateToProps)(Resume);
