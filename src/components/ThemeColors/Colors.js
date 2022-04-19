import React from 'react';
import {StyleSheet} from 'react-native';
import Store from '../../Store/Store'

const {primary, secondary, base} = Store.getState().colors

export default StyleSheet.create({
    backgroundColorPrimary : primary,
    backgroundColorSecondary : secondary,
    backgroundColorBase : base,
})