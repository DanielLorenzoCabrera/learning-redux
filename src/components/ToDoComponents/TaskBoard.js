import React, {Component} from 'react';
import {FlatList, StyleSheet, View} from 'react-native';
import TaskItem from './TaskItem';
import {connect} from 'react-redux';

class TaskBoard extends Component {
  
  render() {
    const tasks = Object.values(this.props.tasks);
    console.log(tasks)
    return (
      <FlatList
        style={{flex: 1}}
        data={tasks}
        renderItem={({item}) =>  <TaskItem taskText={item.content} id={item.id} done={item.done}/>}
        keyExtractor={item => item.id}
      />
    );
  }
}

const styles = StyleSheet.create({
  
});

const mapStateToProps = state => {
  return {
    tasks: state.tasks.tasks,
  };
};

export default connect(mapStateToProps)(TaskBoard);
