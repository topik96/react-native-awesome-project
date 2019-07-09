import React from 'react'
import {
    View,
    Text
} from 'react-native'

export default class DetailBook extends React.Component {
    render() {
        const {name} = this.props.navigation.state.params
        return (
            <View>
                <Text>{`your name ${name}`}</Text>
            </View>
        )
    }
}