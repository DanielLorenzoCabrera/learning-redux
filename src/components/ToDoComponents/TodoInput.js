import React, {Component, useState} from 'react';
import {TextInput, StyleSheet, View, Alert} from 'react-native';
import {connect} from 'react-redux';
import colors from '../../../config/colors';
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
      this.setState({content : ''})
      return;
    }
    this.props.add_task(content);
    this.setState({content : ''})
  }

  render() {
    const {container, inputStyle} = styles;
    return (
      <View style={container}>
        <TextInput
          style={inputStyle}
          placeholder={'Write your task'}
          onChangeText={text => this.updateText(text)}
          onSubmitEditing={() => this.submitText()}
          value={this.state.content}></TextInput>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    borderTopColor : colors.secondary,
    borderBottomColor : colors.secondary,
    borderBottomWidth : 5,
    borderTopWidth : 5,
    flexDirection: 'column',
    justifyContent: 'flex-end',
    padding: 5,
    backgroundColor : colors.secondary
  },
  inputStyle: {
    paddingVertical: 20,
    textAlign: 'center',
    borderRadius: 10,
    fontSize: 20,
  },
});

const mapStateToProps = state => {
  return {state};
};

export default connect(mapStateToProps, actions)(TodoInput);
