import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import Navbar from './navbar/Navbar';

class About extends Component {
  render() {
      const {aboutContainer} = styles;
      const {navigation} = this.props;
    return (
    
      <View style={aboutContainer}>
        <Text>Hola amigos</Text>
        <Navbar navigation={navigation}/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
    aboutContainer : {
        flex :1
    }
})

export default About;
