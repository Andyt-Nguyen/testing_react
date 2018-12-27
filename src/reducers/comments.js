import { SAVE_COMMENT, FETCH_COMMENTS } from '../actions/types'
// import _ from 'lodash'

const INITIAL_STATE = []
export default (state=INITIAL_STATE, action) => {
    switch(action.type) {
        case SAVE_COMMENT:
            return [ ...state, action.payload ]
        
        case FETCH_COMMENTS:
            const names = action.payload.data.map( a => a.name)
            return [ ...names]
        default: 
            return state
    }
}