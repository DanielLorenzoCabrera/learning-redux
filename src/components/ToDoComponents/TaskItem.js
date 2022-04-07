import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import colors from '../../../config/colors';

const TaskItem = ({taskText}) => {
  const {taskContainer, taskTextStyle} = styles;
  return (
    <View style={taskContainer}>
      <Text style={taskTextStyle}>{taskText}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  taskContainer: {
    backgroundColor: '#fff',
    padding: 5,
    borderBottomColor : colors.primary,
    borderBottomWidth : 2,
  },
  taskTextStyle: {
    paddingVertical: 20,
    textAlign: 'center',
    borderRadius: 10,
    fontSize: 20,
  },
});

export {TaskItem};
