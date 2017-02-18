/**
 * Created by Administrator on 2/18/2017.
 */
import React, {Component} from 'react';
import {
    View,
    Text,
    StyleSheet
} from 'react-native';
export default class Button extends Component{
    render(){
        return(
            <View>
                <Text>{this.props.text}</Text>
            </View>
        );
    }
}
Button.propType = {
    text: React.PropTypes.string
}