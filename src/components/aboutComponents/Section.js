import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';
// import colors from '../../../config/colors';
import {connect} from 'react-redux';

class Section extends Component {
  render() {
    const {title, content, theme, colors} = this.props;
    const {primary, base} = colors;
    const {container, titleStyle, contentStyle} = styles;
    const [dark, light] = [
      {backgroundColor: primary, color: base, textAlign: 'justify'},
      {backgroundColor: base, color: primary, textAlign: 'justify'},
    ];
    const actualTheme = theme === 'dark' ? dark : light;
    return (
      <View style={[container, actualTheme]}>
        <Text style={[titleStyle, actualTheme]}>{title}</Text>
        <Text style={[contentStyle, actualTheme]}>{content}</Text>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    justifyContent: 'space-around',
    minHeight: 100,
    padding: 15,
  },
  titleStyle: {
    fontSize: 30,
    fontWeight: 'bold',
    marginVertical: 20,
  },
  contentStyle: {
    fontSize: 20,
    marginVertical: 10,
  }
});

const mapStateToProps = state => {
  const {colors} = state;
  return {colors};
};

export default connect(mapStateToProps)(Section);
