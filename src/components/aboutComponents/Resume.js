import React, {Component} from 'react';
import {View, Image, Text, StyleSheet} from 'react-native';
import colors from '../../../config/colors';
import { connect } from 'react-redux'; 
import * as ChangeColors from '../../actions/ChangeColors'

class Resume extends Component {

  render() {
    const {nameText, jobPosition, colors} = this.props;
    const {primary, secondary} = colors;
    const {
      resume,
      imageStyle,
      imageContainer,
      textContainer,
      profileName,
      profileJob,
    } = styles;
    const img = require('../../../assets/img/profile.jpg');

    const [imageContainerStyle, profileNameStyle,profileJobStyle] = [
      {...imageContainer,  borderColor : primary},
      {...profileName, color : secondary},
      {...profileJob, color : primary},
    ]

    return (
      <View style={resume}>
        <View style={imageContainerStyle}>
          <Image source={img} style={imageStyle} />
        </View>
        <View style={textContainer}>
          <Text style={profileNameStyle}>{nameText}</Text>
          <Text style={profileJobStyle}>{jobPosition}</Text>
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
    borderRadius: 100,
    borderWidth: 3,
    padding: 3,
  },
  textContainer: {
    flexDirection: 'column',
    alignItems: 'center',
  },
  profileName: {
    fontSize: 30,
    fontWeight: 'bold',
  },
  profileJob: {
    fontSize: 20,
  },
});



const mapStateToProps = state => {
  return {colors};
}

export default connect(mapStateToProps,ChangeColors)(Resume);
