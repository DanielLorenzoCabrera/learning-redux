import React, {Component} from "react";
import { connect } from "react-redux";
import {Text, FlatList, StyleSheet} from "react-native";
import ListItem from "./ListItem";


class LibraryList extends Component {
    render(){
        const {list, listItem, contentContainer} = styles;
        return(
        <FlatList
        contentContainerStyle={contentContainer}
        style={list}
        data={this.props.libraries}
        renderItem={({item}) => {
           return  <ListItem title={item.title} description={item.description} />
        }}/>
        )
    }
}

const mapListToProps = (state) => {
    return {libraries : state.libraries}
}


const styles = StyleSheet.create({
    list :{
        flex : 1,
    },
    contentContainer: {
        justifyContent: 'center',
        flexGrow : 1
        

    }
})


export default connect(mapListToProps)(LibraryList)
