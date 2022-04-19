import React, {Component} from 'react';
import {StyleSheet, View, Text} from 'react-native';
import { connect } from 'react-redux';
import ChangeColorButton from './ChangeColors/ChangeColorButton';
import * as ChangeColors from '../actions/ChangeColors'
import Navbar from './navbar/Navbar';


class ChangeTheme extends Component {

turnBlackAndYellow(){
    const {change_primary_color,change_secondary_color} = this.props;
    console.log(this)
    
    change_primary_color('#000')
    change_secondary_color('#F4FF52')
}


  render() {
      const {navigation} = this.props;
    return (
      <View style={{flex: 1, backgroundColor: 'red'}}>
        <ChangeColorButton text={'Default'} />
        <ChangeColorButton text={'Black and Yellow'} onPress={() => this.turnBlackAndYellow()}/>
        <ChangeColorButton text={'ddddddd'} />
        <Navbar navigation={navigation}></Navbar>
      </View>
    );
  }
}

const styles = StyleSheet.create({});


const mapStateToProps = state => {
    return state
  };

export default connect(mapStateToProps, ChangeColors)(ChangeTheme);
