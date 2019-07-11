import React, {Component} from 'react'
import {
    View,
    Text,
    TextInput,
    TouchableOpacity,
    StyleSheet,
    Alert
} from 'react-native'
import CustomInput from '../components/CustomInput';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection:'column',
        justifyContent:'center',
        alignItems:'center'
    },
    viewBGColor:{
        backgroundColor:'red'
    },
    defaultText:{
        fontFamily:'Montserrat-Bold'
    }
})

export default class TrainingD2 extends Component {
    constructor(props){
        super(props)
        this.state = {
            username:'',
            password:''
        }
        this.handleInput = this.handleInput.bind(this);
    }

    componentWillMount(){

    }

    componentDidMount(){
        console.log('jalan setelah render')
    }

    passDataToProfile(username, password){
        if(username != undefined && password !=undefined){
            this.props.navigation.navigate('Profile',
            {username: username, password:password})
        }else{
            Alert.alert(
                'Error',
                `${username || password} kosong`,
                [
                  {text: 'Ask me later', onPress: () => console.log('Ask me later pressed')},
                  {
                    text: 'Cancel',
                    onPress: () => console.log('Cancel Pressed'),
                    style: 'cancel',
                  },
                  {text: 'OK', onPress: () => {
                      this.setState({
                          username: null,
                          password:null 
                        })
                    }},
                ],
                {cancelable: false},
              );
        }
    }

    handleInput(stateKey, value){
        console.log(value)
        this.setState({[stateKey]: value})
    }

    handleLogin(){

    }

    render(){
        const { username, password } = this.state 
        console.log('di render ',username)
        return (
            <View style={styles.container}>
               <CustomInput
                defaultValue={username} 
                handleInput={this.handleInput}
                defaultKey='username'/>
              <CustomInput
                defaultValue={password} 
                isSecure={true}
                handleInput={this.handleInput}
                defaultKey='password'/>
                <TouchableOpacity
                    onPress={()=>{
                        this.passDataToProfile(this.state.name)
                    }}
                >
                    <Text 
                    style={[styles.defaultText, styles.viewBGColor]}
                    >Login</Text>
                </TouchableOpacity>

            </View>
        )
    }

}