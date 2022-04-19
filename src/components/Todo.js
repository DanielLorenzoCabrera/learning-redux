import React, {Component} from 'react';
import {StyleSheet, View} from 'react-native';
import TodoInput from './ToDoComponents/TodoInput';
import Navbar from './navbar/Navbar';
import TaskBoard from './ToDoComponents/TaskBoard';
import colors from '../../config/colors';
import { connect } from 'react-redux';

class Todo extends Component {
  render() {
    const {base} = this.props.colors;
    const {board} = styles;
    const boardStyles = {...board, backgroundColor : base}
    return (
      <View style={boardStyles}>
        <TaskBoard />
        <TodoInput />
        <Navbar navigation={this.props.navigation} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  board: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-around'
  }
});

const mapStateToProps = state => {
  const {colors} = state;
  return {colors};
};

export default connect(mapStateToProps)(Todo);
