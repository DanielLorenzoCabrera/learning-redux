import React, {Component} from 'react';
import {TouchableWithoutFeedback, View, Text, StyleSheet} from 'react-native';
import {connect} from 'react-redux';

class RedirectButton extends Component {
  render() {
    const {onPress, textButton, colors} = this.props;
    const {primary, secondary} = colors;
    const {buttonContainer, text, buttonStyle} = styles;
    const [buttonTextStyle, textStyle] = [
      {...buttonStyle, color: primary, backgroundColor: secondary},
      {...text, color: primary},
    ];
    return (
      <TouchableWithoutFeedback onPress={onPress}>
        <View style={buttonContainer}>
          <View style={buttonTextStyle}>
            <Text style={textStyle}>{textButton}</Text>
          </View>
        </View>
      </TouchableWithoutFeedback>
    );
  }
}

const styles = StyleSheet.create({
  buttonContainer: {
    flex: 1,
    flexDirection: 'column',
    padding: 10,
    alignItems: 'flex-end',
  },
  buttonStyle: {
    flex: 1 / 2,
    padding: 10,
    borderRadius: 10,
  },
  text: {
    textAlign: 'center',
    fontSize: 20,
    fontWeight: 'bold',
  },
});

const mapStateToProps = state => {
  return state;
};

export default connect(mapStateToProps)(RedirectButton);
