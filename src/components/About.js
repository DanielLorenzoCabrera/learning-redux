import React, {Component} from 'react';
import {View, Text, StyleSheet, ScrollView} from 'react-native';
import Navbar from './navbar/Navbar';
import colors from '../../config/colors';
import {Resume, Section} from './aboutComponents';
class About extends Component {
  render() {
    const {aboutContainer} = styles;
    const {navigation} = this.props;
    return (
      <View style={aboutContainer}>
        <ScrollView >
          <Resume />
          <Section title={'amistad de la buena'} content={'rferfrfe rf erf erferferf erfer f erf er fer ferf er f erf er fe rf erf er f erf erferf erf erf ef erf erferf e'}/>
        </ScrollView>
          <Navbar navigation={navigation} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  aboutContainer: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-between',
    backgroundColor: colors.base,
  },
});

export default About;
