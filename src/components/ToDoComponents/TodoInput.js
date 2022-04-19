import React, {Component} from 'react';
import {TextInput, StyleSheet, View, Alert} from 'react-native';
import {connect} from 'react-redux';
import * as actions from '../../actions/';

class TodoInput extends Component {
  state = {content: ''};
  updateText = text => {
    this.setState({content: text});
  };

  submitText = () => {
    const content = this.state.content.trim();
    if (content === '') {
      Alert.alert("Tasks text can't be empty. Please fill in the field");
      this.setState({content: ''});
      return;
    }
    this.props.add_task(content);
    this.setState({content: ''});
  };

  render() {
    const {container, inputStyle} = styles;
    const {secondary} = this.props.colors;
    const containerColors = {
      borderTopColor: secondary,
      borderBottomColor: secondary,
    };
    return (
      <View style={[container, containerColors]}>
        <TextInput
          style={inputStyle}
          placeholder={'Write your task'}
          onChangeText={text => this.updateText(text)}
          onSubmitEditing={() => this.submitText()}
          value={this.state.content}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    borderBottomWidth: 5,
    borderTopWidth: 5,
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
  const {colors} = state;
  return {colors};
};

export default connect(mapStateToProps, actions)(TodoInput);
