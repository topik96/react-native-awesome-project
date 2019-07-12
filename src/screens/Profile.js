import React,{Component} from 'react'
import {
    View,
    Text,
    Image,
    StyleSheet,
    BackHandler
} from 'react-native'

const profilePicture = require('../assets/images/os-logo.png')
const styles = StyleSheet.create({
    container:{
        flex:1,
        alignItems:'center',
        justifyContent:'center'
    }
})

export default class ProfileScreen extends Component {

componentWillUnmount() {
    BackHandler.removeEventListener('hardwareBackPress', this.handleBackButton);
}

handleBackButton(){
    console.log('tapped')
}
 render(){
    const {email} = this.props.navigation.state.params
     return(
        <View style={styles.container}>
        <Image
            source={profilePicture}
            style={{
                borderWidth:2,
                borderColor:'gray',
                width:75,
                height:75,
                borderRadius:75/2,
                marginBottom: 16
            }}
        />
        <Text>{`Your Mail ${email}`}</Text>
    </View>
     )
 }
}