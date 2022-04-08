import React, {Component} from 'react';
import {StyleSheet, Text, View, TouchableHighlight} from 'react-native';
import colors from '../../../config/colors';
import {connect} from 'react-redux';
import * as actions from '../../actions/';

class TaskItem extends Component {
  render() {
    const {id,taskText, delete_task} = this.props;
    const {taskContainer, taskTextStyle, closeTag, closeTagText} = styles;
    console.log(this);
    return (
      <View style={taskContainer}>
        <Text style={taskTextStyle}>{taskText}</Text>
        <View style={closeTag}>
          <TouchableHighlight onPress={()=> delete_task(id)} style={{borderRadius: 10}}>
            <Text style={closeTagText}>X</Text>
          </TouchableHighlight>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  taskContainer: {
    backgroundColor: '#fff',
    padding: 5,
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
    flex: 10,
  },
  closeTag: {
    backgroundColor: colors.secondary,
    borderRadius: 10,
    flex : 1,
    
  },
  closeTagText: {
    flex : 1,
    color: colors.primary,
    fontSize: 30,
    fontWeight: 'bold',
    textAlign : 'center'
  },
});

const mapStateToProps = state => {
  return {};
};

export default connect(mapStateToProps, actions)(TaskItem);
