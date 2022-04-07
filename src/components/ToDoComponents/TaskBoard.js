import React,{Component} from "react";
import {ScrollView, StyleSheet} from 'react-native';
import {TaskItem} from './';

class TaskBoard extends Component{
    render(){
        const {board} = styles;
        return(
            <ScrollView contentContainerStyle={board} >
                <TaskItem taskText={'default to do item'}></TaskItem>
                <TaskItem taskText={'default to do item'}></TaskItem>
                <TaskItem taskText={'default to do item'}></TaskItem>
            </ScrollView>
        )
    }
}

const styles = StyleSheet.create({
    board : {
        backgroundColor : 'blue',
        paddingTop : 20
    }
})

export {TaskBoard}