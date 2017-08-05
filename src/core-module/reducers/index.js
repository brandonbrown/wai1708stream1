import { combineReducers } from 'redux'

//import all reducers
import eplclubs from './eplclubs'

const clubsReducer = combineReducers({
  eplclubs,
})

export default clubsReducer
