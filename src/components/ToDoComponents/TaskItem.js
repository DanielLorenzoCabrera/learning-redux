import React, {Component} from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableHighlight,
  TouchableWithoutFeedback,
} from 'react-native';
import colors from '../../../config/colors';
import {connect} from 'react-redux';
import * as actions from '../../actions/';
import Tag from './Tag';

class TaskItem extends Component {
  render() {
    const {id, taskText, delete_task, mark_as_done, done} = this.props;
    const {taskContainer, taskTextStyle, tags, closeTag, doneTag, isDone} = styles;
    const isTaskDone = done ? isDone : {};
    return (
      <View style={taskContainer}>
        <Text style={[taskTextStyle, isTaskDone]}>{taskText}</Text>
        <View style={tags}>
          <Tag
            iconTag={done ? '↺' : '✓'}
            style={doneTag}
            onPress={() => mark_as_done(id)}
          />
          <Tag iconTag={'X'} style={closeTag} onPress={() => delete_task(id)} />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  taskContainer: {
    backgroundColor: '#fff',
    borderBottomColor: colors.primary,
    borderBottomWidth: 2,
    flexDirection: 'row',
    alignItems: 'center',
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
    backgroundColor: colors.secondary,
    flex: 1,
    paddingVertical: 10,
  },
  closeTag: {
    paddingVertical: 10,
    backgroundColor: colors.primary,
    flex: 1,
  },
  tagText: {
    color: colors.primary,
    fontSize: 30,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  isDone: {
    textDecorationLine: 'line-through',
  },
});

const mapStateToProps = state => {
  return {};
};

export default connect(mapStateToProps, actions)(TaskItem);
