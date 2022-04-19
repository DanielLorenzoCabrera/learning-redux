import React, {Component} from 'react';
import {View, StyleSheet, FlatList} from 'react-native';
import Navbar from './navbar/Navbar';
import colors from '../../config/colors';
import  Section from './aboutComponents/Section';
import Resume from './aboutComponents/Resume';
import AboutInfo from './aboutComponents/AboutInfo';


class About extends Component {
  render() {
    const {name, job_position, skills} = AboutInfo;
    const {aboutContainer} = styles;
    const {navigation} = this.props;
    return (
        <View style={aboutContainer}>
          <Resume nameText={name} jobPosition={job_position} />
            <FlatList
              contentContainerStyle={{}}
              data={skills}
              renderItem={({item}) => {
                return (
                  <Section
                    title={item.title}
                    content={item.description}
                    theme={item.theme}
                  />
                );
              }}
            />
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
