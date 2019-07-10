import {
    COUNTER
} from '../actionTypes'

const inputQtyReducer = (state = {count: 0}, action) =>{
    switch(action.type){
        case COUNTER.INCREMENT:
        console.log('increment reducer', state)
        return {
            ...state,
            count: ++state.count
        }
        case COUNTER.DECREMENT:
        console.log('decrement reducer')
        return {
            ...state,
            count: state.count == 0 ? 0 : --state.count
        }
        default: 
        return state
    }
}

export default inputQtyReducer