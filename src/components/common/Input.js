import React from "react";
import {TextInput, View, Text} from "react-native";

const Input = ({label, value, onChangeText, placeholder, secureTextEntry}) => {

    const {inputStyle, textStyle, containerStyle} = styles;

    return(
        <View style={containerStyle}>
            <Text style={textStyle}>{label}</Text>
            <TextInput 
                secureTextEntry={secureTextEntry}
                autoCorrect={false}
                placeholder={placeholder}
                style={inputStyle}
                value={value}
                onChangeText={onChangeText}
            />
        </View>
    )
}

const styles = {
    inputStyle: {
        color: '#000',
        paddingLeft: 5,
        paddingRight: 5,
        flex: 2,
        fontSize: 18,
        lineHeight: 23
    },
    textStyle: {
        fontSize: 18,
        flex: 1,
        paddingLeft: 20
    },
    containerStyle: {
        height: 40,
        flex: 1,    
        flexDirection: 'row',
        alignItems: 'center'
    }
}

export {Input};