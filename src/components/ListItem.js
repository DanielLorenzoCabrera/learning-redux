import React, {Component} from 'react';
import {View, StyleSheet, Text, TouchableWithoutFeedback} from 'react-native';
import * as actions from './../actions';
import {connect} from 'react-redux';
import RedirectButton from './RedirectButton';

class ListItem extends Component {
  isItemSelected() {
    const {id, selectedLibraryId} = this.props;
    return id === selectedLibraryId ? {display: 'flex'} : {display: 'none'};
  }

  render() {
    const {itemContainer, titleStyle, descriptionStyle, titleContainer} =
      styles;

    const selection = this.isItemSelected();
    const {id, title, description, navigation, colors} = this.props;
    const {primary, secondary, base} = colors;
    const titleContainerStyle = {
      ...titleContainer,
      borderBottomColor: secondary,
      backgroundColor: primary,
    };

    return (
      <View>
        <TouchableWithoutFeedback onPress={() => this.props.selectLibrary(id)}>
          <View style={itemContainer}>
            <View style={titleContainerStyle}>
              <Text style={[titleStyle, {color: base}]}>{title}</Text>
            </View>
            <View style={selection}>
              <Text style={descriptionStyle}>{description}</Text>
              <RedirectButton
                textButton={'see more'}
                onPress={() => navigation.navigate(title, {})}
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
  },
  titleStyle: {
    flex: 1,
    textAlign: 'center',
    fontSize: 20,
    paddingVertical: 10,
    fontWeight: 'bold',
    textTransform: 'uppercase',
  },
  descriptionStyle: {
    fontSize: 20,
    padding: 10,
  }
});

const mapStateToProps = state => {
  const {selectedLibraryId, colors} = state;
  return {selectedLibraryId, colors};
};

export default connect(mapStateToProps, actions)(ListItem);
/*
El primer parámetro de connect debe ser si o si mapstatetoprops, en este caso como no vamos a mapear
props al componente sino pasarle acciones indicamos que la funcion será null
Como segundo parámetro pasamos las acciones
*/
