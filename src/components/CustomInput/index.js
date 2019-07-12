import React from 'react'
import {
    View,
    TextInput,
    Dimensions
} from 'react-native'

const {width} = Dimensions.get('window')

const CustomInput = ({defaultValue, defaultKey, isSecure, handleInput}) =>{
    return (
        <View>
             <TextInput
                    style={{
                        borderBottomColor:'green',
                        borderBottomWidth:1,
                        width:width - 60
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