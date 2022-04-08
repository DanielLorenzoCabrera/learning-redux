import React, {Component} from 'react';
import {FlatList, StyleSheet, View} from 'react-native';
import {TaskItem} from './';
import {connect} from 'react-redux';

class TaskBoard extends Component {

  renderItem = ({item}) => {
    
    return (
      <TaskItem
        taskText={item.content}
      />
    );
  };

  render() {
    const {tasks} = this.props;
    const {board} = styles;
    console.log(tasks);
    return (
      <View>
        <FlatList
          contentContainerStyle={{backgroundColor: 'yellow', flexGrow: 1}}
          
          data={tasks}
          renderItem={this.renderItem}/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  board: {
    backgroundColor: 'blue',
    paddingTop: 20,
  },
});

const mapStateToProps = state => {
  return {
    tasks: state.tasks.tasks,
  };
};

export default connect(mapStateToProps)(TaskBoard);
