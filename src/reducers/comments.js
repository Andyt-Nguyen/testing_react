import { SAVE_COMMENT } from '../actions/types'
// import _ from 'lodash'

const INITIAL_STATE = []
export default (state=INITIAL_STATE, action) => {
    switch(action.type) {
        case SAVE_COMMENT:
            return [ ...state, action.payload ]
        default: 
            return state
    }
}