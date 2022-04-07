import React,{Component} from "react";
import {FlatList, StyleSheet} from 'react-native';
import {TaskItem} from './';
import { connect } from "react-redux";

class TaskBoard extends Component{
    render(){
        const {tasks} = this.props
        const {board} = styles;
        console.log(tasks)
        return(
            <FlatList
            contentContainerStyle={{}}
            style={{flex:1, backgroundColor: 'red'}}
            data={tasks}
            renderItem={({item}) => {
                return (   
                    <TaskItem taskText={item.content} keyExtractor={item.id}>
                    </TaskItem>
              );
            }}
          />
        )
    }
}

const styles = StyleSheet.create({
    board : {
        backgroundColor : 'blue',
        paddingTop : 20
    }
})

const mapStateToProps = state =>{
    return {
        tasks : state.tasks.tasks
    }
}

export default connect(mapStateToProps)(TaskBoard);