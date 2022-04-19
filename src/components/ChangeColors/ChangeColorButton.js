import React, {Component} from 'react';
import {TouchableHighlight, Text, StyleSheet} from 'react-native';

class ChangeColorButton extends Component {
  render() {
    const {text, onPress} = this.props;
    const {container, textStyle} = styles;
    return (
        
      <TouchableHighlight style={container} onPress={onPress}>
        <Text style={textStyle}>{text}</Text>
      </TouchableHighlight>
    );
  }
}
const styles = StyleSheet.create({
    container : {
        backgroundColor : 'blue',
        padding : 20
    },
    textStyle : {
        textAlign : 'center',
        fontWeight: 'bold',
        fontSize : 30
    }
});

export default ChangeColorButton;
