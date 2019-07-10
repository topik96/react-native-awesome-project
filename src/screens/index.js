import React from 'react';
import AppNavigator from '../AppNavigator'
import {Provider} from 'react-redux'
import store from '../redux'

export default class MainScreen extends React.Component {
    render(){
        return(
            <Provider store={store}>
                <AppNavigator/>
            </Provider>
        )
    }
}