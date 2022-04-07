import React, {Component} from 'react';
import {TextInput, StyleSheet, View} from 'react-native';


class TodoInput extends Component {
  render() {
    const {container, inputStyle} = styles;
    return (
      <View style={container}>
        <TextInput style={inputStyle} placeholder={'Write your task'}></TextInput>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    flexDirection: 'column',
    justifyContent: 'flex-end',
    padding : 5
},
inputStyle: {
      paddingVertical : 20,
      textAlign : 'center',
      borderRadius : 10,
      fontSize : 20
  },
});

export {TodoInput};
