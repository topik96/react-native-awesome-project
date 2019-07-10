import {
    COUNTER
} from '../actionTypes'

export const counterIncrement = () => ({
    type: COUNTER.INCREMENT,
})

export const counterDecrement = () => ({
    type: COUNTER.DECREMENT
})