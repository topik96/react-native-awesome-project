import React, { Component } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Alert,
  ActivityIndicator
} from 'react-native';
import CustomInput from '../components/CustomInput';
import API from '../utils/Api';
import StorageUtils from '../utils/Storage';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center'
  },
  viewBGColor: {
    backgroundColor: 'red'
  },
  defaultText: {
    fontFamily: 'Montserrat-Bold',
    fontSize:18
  }
});

export default class RegisterUser extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fullName:'',
      email: '',
      password: '',
      isLoading: false
    };
    this.handleInput = this.handleInput.bind(this);
  }

  // passDataToProfile(username, password){
  //     if(username != undefined && password !=undefined){
  //         this.props.navigation.navigate('Profile',
  //         {username: username, password:password})
  //     }else{
  //         Alert.alert(
  //             'Error',
  //             `${username || password} kosong`,
  //             [
  //               {text: 'Ask me later', onPress: () => console.log('Ask me later pressed')},
  //               {
  //                 text: 'Cancel',
  //                 onPress: () => console.log('Cancel Pressed'),
  //                 style: 'cancel',
  //               },
  //               {text: 'OK', onPress: () => {
  //                   this.setState({
  //                       username: null,
  //                       password:null
  //                     })
  //                 }},
  //             ],
  //             {cancelable: false},
  //           );
  //     }
  // }

  async componentWillMount(){
    const token = await StorageUtils.getToken()
    if(token){
      this.props.navigation.navigate('ListBook')
    }
  }

  handleAlert(message) {
    this.handleInput('isLoading', false);
    Alert.alert(
      'Error',
      message,
      [
        {
          text: 'OK',
          onPress: () => {
            this.setState({
              username: null,
              password: null,
              fullName:null
            });
          }
        }
      ],
      { cancelable: false }
    );
  }

  handleInput(stateKey, value) {
    this.setState({ [stateKey]: value });
  }

  handleRegister() {
    const { fullName, email, password } = this.state;
    this.handleInput('isLoading', true);
    API .register({fullname:fullName, email: email, password: password })
      .then((res) => {
        this.handleInput('isLoading', false);
        this.props.navigation.navigate('Home', {
          email:res.data.data.email
        });
      })
      .catch((err) => {
       this.handleAlert(err.message)
        console.log(err.message);
      });
  }

  render() {
    const {fullName, email, password, isLoading} = this.state;

    if (isLoading) {
      return (<ActivityIndicator size={'large'} />) 
    } else {
      return (
        <View style={styles.container}>
         <CustomInput
            defaultValue={fullName}
            handleInput={this.handleInput}
            defaultKey="fullName"
          />
          <CustomInput
            defaultValue={email}
            handleInput={this.handleInput}
            defaultKey="email"
          />
          <CustomInput
            defaultValue={password}
            isSecure={true}
            handleInput={this.handleInput}
            defaultKey="password"
          />
          <TouchableOpacity
          style={{ marginTop:20 }}
            onPress={() => {
              this.handleRegister();
            }}
          >
            <Text style={[styles.defaultText]}>Register</Text>
          </TouchableOpacity>
        </View>
      );
    }
  }
}
