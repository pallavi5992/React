import { combineReducers } from 'redux'
import Reducer from './login/Reducer'

const rootReducer=combineReducers({LoginReducer:Reducer});

export default rootReducer;