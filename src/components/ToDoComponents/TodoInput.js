import React, {Component, useState} from 'react';
import {TextInput, StyleSheet, View, Alert} from 'react-native';
import {connect} from 'react-redux';
import * as actions from '../../actions/';

class TodoInput extends Component {
  state = {content: ''};

  updateText = text => {
    this.setState({content : text})
  };

  submitText = () => {
    const {content} = this.state;
    if(content.trim() === ''){
      Alert.alert("Tasks text can't be empty. Please fill the input")
      return;
    }
    this.props.add_task(content);
  }

  render() {
    const {add_task} = this.props;
    const {container, inputStyle} = styles;
    return (
      <View style={container}>
        <TextInput
          style={inputStyle}
          placeholder={'Write your task'}
          onChangeText={text => this.updateText(text)}
          onSubmitEditing={() => this.submitText()}></TextInput>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    flexDirection: 'column',
    justifyContent: 'flex-end',
    padding: 5,
  },
  inputStyle: {
    paddingVertical: 20,
    textAlign: 'center',
    borderRadius: 10,
    fontSize: 20,
  },
});

const mapStateToProps = state => {
  return {}
};

export default connect(mapStateToProps, actions)(TodoInput);
