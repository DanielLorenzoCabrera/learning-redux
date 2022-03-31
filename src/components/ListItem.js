import React, {Component} from 'react';
import {View, StyleSheet, Text, TouchableHighlight} from 'react-native';
import colors from './../../config/colors';
import * as actions from './../actions';
import {connect} from 'react-redux';
import {render} from 'react-native/Libraries/Renderer/implementations/ReactNativeRenderer-prod';

class ListItem extends Component {
  render() {
    const {itemContainer, titleStyle, descriptionStyle, titleContainer} =
      styles;
    const {id, title, description} = this.props;

    return (
      <TouchableHighlight onPress={this.props.selectLibrary(id)}>
        <View style={itemContainer}>
          <View style={titleContainer}>
            <Text style={titleStyle}>{title}</Text>
          </View>
          <Text style={descriptionStyle}>{description}</Text>
        </View>
      </TouchableHighlight>
    );
  }
}

//} ({id, title, description}) => {

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
    display: 'none',
  },
});

export default connect(null, actions)(ListItem);
/*
El primer parámetro de connect debe ser si o si mapstatetoprops, en este caso como no vamos a mapear
props al componente sino pasarle acciones indicamos que la funcion será null
Como segundo parámetro pasamos las acciones
*/
