import React, {Component} from 'react';
import {
  View,
  StyleSheet,
  Text,
  TouchableWithoutFeedback,
  Button,
} from 'react-native';
import colors from './../../config/colors';
import * as actions from './../actions';
import {connect} from 'react-redux';
import RedirectButton from './RedirectButton';

class ListItem extends Component {
  isItemSelected() {
    const {id, selectedId} = this.props;
    return id === selectedId;
  }

  render() {
    const {
      itemContainer,
      titleStyle,
      descriptionStyle,
      titleContainer,
      selected,
      notSelected,
    } = styles;
    const selection = this.isItemSelected() ? selected : notSelected;
    const {id, title, description, navigation} = this.props;

    return (
      <View>
        <TouchableWithoutFeedback onPress={() => this.props.selectLibrary(id)}>
          <View style={itemContainer}>
            <View style={titleContainer}>
              <Text style={titleStyle}>{title}</Text>
            </View>
            <View style={selection}>
              <Text style={descriptionStyle}>{description}</Text>
              <RedirectButton
                textButton={'see more'}
                onPress={() => navigation.navigate(title,{})}
              />
            </View>
          </View>
        </TouchableWithoutFeedback>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  itemContainer: {
    flex: 1,
  },
  titleContainer: {
    borderBottomWidth: 6,
    borderBottomColor: colors.secondary,
  },
  titleStyle: {
    flex: 1,
    backgroundColor: colors.primary,
    textAlign: 'center',
    fontSize: 20,
    paddingVertical: 10,
    fontWeight: 'bold',
    textTransform: 'uppercase',
    color: colors.secondary,
  },
  descriptionStyle: {
    backgroundColor: colors.base,
    fontSize: 20,
    padding: 10,
  },
  selected: {
    display: 'flex',
  },
  notSelected: {
    display: 'none',
  },
});

const mapStateToProps = state => {
  return {
    selectedId: state.selectedLibraryId,
  };
};

export default connect(mapStateToProps, actions)(ListItem);
/*
El primer parámetro de connect debe ser si o si mapstatetoprops, en este caso como no vamos a mapear
props al componente sino pasarle acciones indicamos que la funcion será null
Como segundo parámetro pasamos las acciones
*/
