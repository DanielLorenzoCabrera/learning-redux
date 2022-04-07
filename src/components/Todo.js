import React, {Component} from 'react';
import {StyleSheet, View} from 'react-native';
import TodoInput from './ToDoComponents/TodoInput';
import Navbar from './navbar/Navbar';
import {TaskBoard} from './ToDoComponents/';

class Todo extends Component {
  render() {
    const {board} = styles;
   
    return (
      <View style={board}>
        <TaskBoard></TaskBoard>
        <TodoInput />
        <Navbar />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  board: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-around',
  },
});

export {Todo};
