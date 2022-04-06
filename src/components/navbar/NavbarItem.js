import React, {Component} from "react";
import {View, Text, StyleSheet,Image} from 'react-native';
import colors from "../../../config/colors";


class NavbarItem extends Component{
    render(){
        const {navbarItemContainer, imageStyle} = styles;
        const {itemImage} = this.props;
        return(
            <View style={navbarItemContainer}>
                <Image style={imageStyle} source={itemImage}/>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    navbarItemContainer : {
        borderWidth : 1,
        borderColor : 'black',
        borderRadius : 30,
        marginHorizontal : 5,
        flex: 1,
        flexDirection : 'column',
        justifyContent : 'center',
        alignItems : 'center', 
    },
    imageStyle : {
        flex: 1,
        resizeMode : 'contain'
    }
})

export default NavbarItem;