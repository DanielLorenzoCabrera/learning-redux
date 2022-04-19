import React, {Component} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {connect} from 'react-redux';
import * as actions from '../../actions/';
import Tag from './Tag';

class TaskItem extends Component {
  render() {
    const {id, taskText, delete_task, mark_as_done, done, colors} = this.props;
    const {primary, secondary} = colors;
    const {taskContainer, taskTextStyle, tags, closeTag, doneTag, isDone} = styles;
    const isTaskDone = done ? isDone : {};
    const [taskContainerStyle, doneTagStyle, closeTagStyle] = [
      {...taskContainer, borderColor: primary},
      {...doneTag, backgroundColor: secondary},
      {...closeTag, backgroundColor: primary},
    ];
    return (
      <View style={taskContainerStyle}>
        <Text style={[taskTextStyle, isTaskDone]}>{taskText}</Text>
        <View style={tags}>
          <Tag
            iconTag={done ? '↺' : '✓'}
            style={doneTagStyle}
            onPress={() => mark_as_done(id)}
          />
          <Tag
            iconTag={'X'}
            style={closeTagStyle}
            onPress={() => delete_task(id)}
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  taskContainer: {
    borderWidth: 0.5,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'transparent',
  },
  taskTextStyle: {
    padding: 20,
    textAlign: 'center',
    borderRadius: 10,
    fontSize: 20,
    flex: 6,
  },
  tags: {
    flex: 1,
    flexDirection: 'column',
  },
  doneTag: {
    flex: 1,
    paddingVertical: 10,
  },
  closeTag: {
    paddingVertical: 10,
    flex: 1,
  },
  isDone: {
    textDecorationLine: 'line-through',
  },
});

const mapStateToProps = state => {
  return state;
};

export default connect(mapStateToProps, actions)(TaskItem);
