import React from 'react'
import {
    View,
    TextInput
} from 'react-native'

const CustomInput = ({defaultValue, defaultKey, isSecure, handleInput}) =>{
    return (
        <View>
             <TextInput
                    style={{
                        borderBottomColor:'red',
                        borderBottomWidth:1,
                    }}
                    value={defaultValue}
                    placeholder={defaultKey}
                    secureTextEntry={isSecure}
                    onChangeText={(text)=> handleInput(defaultKey, text)}
                />
        </View>
    )
}

export default CustomInput