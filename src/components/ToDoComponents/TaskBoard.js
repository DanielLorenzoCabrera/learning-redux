import React, {Component} from 'react';
import {FlatList} from 'react-native';
import TaskItem from './TaskItem';
import {connect} from 'react-redux';

class TaskBoard extends Component {
  
  render() {
    const doneTasks = Object.values(this.props.tasks).filter(function(task){
      return task.done
    })
    const undoneTasks = Object.values(this.props.tasks).filter(function(task){
      return !task.done
    })
    const tasks = [...undoneTasks,...doneTasks]
    return (
      <FlatList
        style={{flex: 1}}
        data={tasks}
        renderItem={({item}) =>  <TaskItem taskText={item.content} id={item.id} done={item.done} />}
        keyExtractor={item => item.id}
      />
    );
  }
}


const mapStateToProps = state => {
  return {
    tasks: state.tasks.tasks,
  };
};

export default connect(mapStateToProps)(TaskBoard);
