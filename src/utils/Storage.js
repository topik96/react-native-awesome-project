import AsyncStorage from '@react-native-community/async-storage'

const type = {
    onBoard:'myLib.onboard',
    splash:'myLib.splash',
    token:'myLib.token'
}

export default class StorageUtils {
    static setToken = async token => {
        try { 
            const data = await AsyncStorage.setItem(type.token, token)
            console.log('sukses')
            return data
        }catch (error){
            return error
        }
    }

    static getToken = async () => {
        try{
            const data = await AsyncStorage.getItem(type.token)
            return data
        }catch (error){
            return error
        }
    }

    static removeToken = async () => {
        try{
            const data = await AsyncStorage.removeItem(type.token)
            return data
        }catch (error){
            return error
        }
    }
} 