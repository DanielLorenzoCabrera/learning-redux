import React, {Component} from 'react';
import {connect} from 'react-redux';
import {FlatList, StyleSheet} from 'react-native';
import ListItem from './ListItem';

class LibraryList extends Component {
  
  renderItem = ({item}) => {
    const {navigation} = this.props;
    return (
      <ListItem
        id={item.id}
        title={item.title}
        description={item.description}
        navigation={navigation}
      />
    );
  };

  render() {
    const {list, contentContainer} = styles;
    return (
      <FlatList
        contentContainerStyle={contentContainer}
        style={list}
        data={this.props.libraries}
        renderItem={this.renderItem}
      />
    );
  }
}

const mapListToProps = state => {
  return {libraries: state.libraries};
};

const styles = StyleSheet.create({
  list: {
    flex: 1,
  },
  contentContainer: {
    justifyContent: 'center',
    flexGrow: 1,
  },
});

export default connect(mapListToProps)(LibraryList);
