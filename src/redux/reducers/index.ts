import { combineReducers } from 'redux'

import crudPageReducer from './reducer_crud_page'
import authenticationReducer from './reducer_authentication'

const rootReducer = combineReducers({
  authenticationReducer,
  crudPageReducer,
})

export default rootReducer
