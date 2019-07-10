import {combineReducers} from 'redux'
import InputQTYReducer from './inputQtyReducer'

export default combineReducers({
 counter: InputQTYReducer
})
